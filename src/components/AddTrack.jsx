import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL } from '../backend';
import { setTracks, setError } from '../actions';

const AddTrack = ({
  error,
  user,
  setError,
  setTracks,
}) => {
  const [track, setTrackInput] = useState('');
  const [goal, setGoalInput] = useState('');
  const [category, setCategoryInput] = useState('');
  const [success, setSuccessInput] = useState('');

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
      setCategoryInput('');
      setGoalInput('');
      setSuccessInput('Track saved');
      setTracks(response);
    }
  };

  return (
    <div className="card has-text-centered">
      <input
        className="input is-rounded "
        type="text"
        value={track}
        placeholder="TrackName"
        onChange={e => {
          setTrackInput(e.target.value);
          setSuccessInput('');
        }}
      />
      <input
        className="input is-rounded "
        type="number"
        value={goal}
        placeholder="Set a goal"
        onChange={e => {
          setGoalInput(e.target.value);
          setSuccessInput('');
        }}
      />
      <span className="select">
        <select
          name=""
          value={category}
          onChange={e => {
            setCategoryInput(e.target.value);
            setSuccessInput('');
          }}
        >
          <option value="" disabled selected>Select a category</option>
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
      </span>
      <br />
      {error ? <p className="has-text-danger">{error}</p> : null}
      {success ? <p className="has-text-success">{success}</p> : null}
      <button
        className="button"
        type="button"
        onClick={apiSaveTrack}
      >
        Add Track
      </button>
    </div>
  );
};

AddTrack.propTypes = {
  error: PropTypes.string.isRequired,
  user: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
  setError: PropTypes.func.isRequired,
  setTracks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setTracks: tracks => dispatch(setTracks(tracks)),
  setError: error => dispatch(setError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTrack);
