import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL } from '../backend';
import { setTracks, setError } from '../actions';

const AddTrack = ({
  error,
  user,
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

  return (
    <div className="card">
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
  );
};

AddTrack.propTypes = {
  error: PropTypes.string.isRequired,
  user: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setTracks: tracks => dispatch(setTracks(tracks)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTrack);
