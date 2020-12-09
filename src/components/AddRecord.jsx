import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL } from '../backend';
import { setTracks, setError } from '../actions';

const AddRecord = ({
  error,
  user,
  setError,
  match,
  tracks,
}) => {
  const [value, setValueInput] = useState('');
  const [success, setSuccessInput] = useState('');

  const track = tracks.filter(track => track.id.toString() === match.params.id)[0];

  const apiSaveRecord = async () => {
    const obj = {
      record: {
        value,
      },
    };
    setError('');
    const { data: response } = await axios.post(`${API_URL}api/v1/records/?track_id=${match.params.id}&token=${user.token}`, obj);
    if (response.error) {
      setError(response.error);
    } else {
      setValueInput('');
      setSuccessInput('Record saved');
    }
  };

  return (
    <div className="card has-text-centered">
      <h2 className="title">
        {`Save a record for ${track.name}`}
      </h2>
      <input
        className="input is-rounded "
        type="number"
        value={value}
        placeholder="Set a value"
        onChange={e => {
          setValueInput(e.target.value);
          setSuccessInput('');
        }}
      />
      <br />
      {error ? <p className="has-text-danger">{error}</p> : null}
      {success ? <p className="has-text-success">{success}</p> : null}
      <button
        className="button is-rounded"
        type="button"
        onClick={apiSaveRecord}
      >
        Add Record
      </button>
    </div>
  );
};

AddRecord.propTypes = {
  error: PropTypes.string.isRequired,
  user: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
  setError: PropTypes.func.isRequired,
  match: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
  tracks: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
  user: state.user,
  tracks: state.tracks,
});

const mapDispatchToProps = dispatch => ({
  setTracks: tracks => dispatch(setTracks(tracks)),
  setError: error => dispatch(setError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRecord);
