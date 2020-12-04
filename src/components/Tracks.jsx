import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { setTrack, setTracks, setError } from '../actions';
import { API_URL } from '../backend';
import TrackPreview from './TrackPreview';

const Tracks = ({
  tracks,
  user,
  setTracks,
  setTrack,
  setError,
}) => {
  const apiGetTracks = async () => {
    setError('');
    const { data: response } = await axios.get(`${API_URL}api/v1/tracks/?token=${user.token}`);
    if (response.error) setError(response.error);
    else setTracks(response);
  };

  useEffect(() => {
    apiGetTracks();
  }, []);

  return (
    <div className="hscroll">
      {tracks.map(track => (
        <TrackPreview key={track.id} track={track} setTrack={id => setTrack(id)} />
      ))}
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
