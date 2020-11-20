import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { setError, setTracks } from '../actions';
import { API_URL } from '../backend';

const Tracks = ({
  tracks,
  user,
  error,
  setTracks,
  setError,
}) => {
  // 1.- Load all tracks from USER
  // 2.- Add a new track
  const [track, setTrack] = useState('');

  const apiGetTracks = async () => {
    const { data: response } = await axios.get(`${API_URL}api/v1/tracks/?token=${user.token}`);
    if (response.error) setError(response.error);
    else setTracks(response);
  };

  const apiSaveTrack = async () => {
    const obj = {
      track: {
        name: track,
      },
    };
    const { data: response } = await axios.post(`${API_URL}api/v1/tracks/?token=${user.token}`, obj);
    if (response.error) {
      console.log(response);
      setError(response.error);
    } else setTracks(response);
  };

  useEffect(() => {
    apiGetTracks();
  }, []);

  return (
    <div>
      <div>
        {tracks.map(track => <p key={track.id}>{track.name}</p>)}
      </div>
      <div>
        <input
          type="text"
          value={track}
          onChange={e => setTrack(e.target.value)}
        />
        <button type="button" onClick={apiSaveTrack}>Add Track</button>
        {error ? <p>{error}</p> : null}
      </div>
      <Link to="/signin">Sign in</Link>
    </div>
  );
};

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  user: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
  error: PropTypes.func.isRequired,
  setTracks: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
  tracks: state.tracks,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setTracks: tracks => dispatch(setTracks(tracks)),
  setError: error => dispatch(setError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
