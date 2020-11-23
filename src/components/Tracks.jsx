import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { setTrack, setTracks, setError } from '../actions';
import { API_URL } from '../backend';
import TrackPreview from './TrackPreview';

const Tracks = ({
  tracks,
  user,
  error,
  setTracks,
  setTrack,
  setError,
}) => {
  const [track, setTrackInput] = useState('');
  const [goal, setGoalInput] = useState('');
  const [category, setCategoryInput] = useState('');

  const categories = [
    'Time',
    'Finance',
    'Education',
    'Fitness',
    'Other',
  ];

  const apiGetTracks = async () => {
    setError('');
    const { data: response } = await axios.get(`${API_URL}api/v1/tracks/?token=${user.token}`);
    if (response.error) setError(response.error);
    else setTracks(response);
  };

  const apiSaveTrack = async () => {
    const obj = {
      track: {
        name: track,
        category,
        goal,
      },
    };
    setError('');
    const { data: response } = await axios.post(`${API_URL}api/v1/tracks/?token=${user.token}`, obj);
    if (response.error) {
      setError(response.error);
    } else {
      setTrackInput('');
      setTracks(response);
    }
  };

  useEffect(() => {
    apiGetTracks();
    setCategoryInput('ZZZ');
  }, []);

  return (
    <div>
      <ul>
        {tracks.map(track => (
          <TrackPreview key={track.id} track={track} setTrack={id => setTrack(id)} />
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={track}
          placeholder="TrackName"
          onChange={e => setTrackInput(e.target.value)}
        />
        <input
          type="number"
          value={goal}
          placeholder="Set a goal"
          onChange={e => setGoalInput(e.target.value)}
        />
        <select name="" value={category} onChange={e => setCategoryInput(e.target.value)}>
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
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
  setTrack: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
  tracks: state.tracks,
  track: state.track,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setTrack: track => dispatch(setTrack(track)),
  setTracks: tracks => dispatch(setTracks(tracks)),
  setError: error => dispatch(setError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
