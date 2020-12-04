import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { setError, setRecords } from '../actions';
import { API_URL } from '../backend';

const Record = ({ record }) => (
  <div className="card">
    <p>{record.value}</p>
    <p>{record.created_at}</p>
  </div>
);

Record.propTypes = {
  record: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
};

const Records = ({
  records,
  user,
  error,
  setRecords,
  setError,
  match,
  history,
}) => {
  const [recordInput, setRecordInput] = useState('');

  const apiGetRecords = async () => {
    setError('');
    const { data: response } = await axios.get(`${API_URL}api/v1/tracks/${match.params.id}/?token=${user.token}`);
    if (response.error) setError(response.error);
    else setRecords(response);
  };

  const apiSaveRecord = async () => {
    const obj = {
      record: {
        value: recordInput,
      },
    };
    setError('');
    const { data: response } = await axios.post(`${API_URL}api/v1/records/?track_id=${match.params.id}&token=${user.token}`, obj);
    if (response.error) {
      setError(response.error);
    } else {
      setRecordInput('');
      setRecords(response);
    }
  };

  const apiDeleteTrack = async () => {
    setError('');
    const { data: response } = await axios.delete(`${API_URL}api/v1/tracks/${match.params.id}/?token=${user.token}`);
    if (response.error) {
      setError(response.error);
    } else {
      history.push('/tracks');
    }
  };

  useEffect(() => {
    apiGetRecords(match.params);
  }, []);

  return (
    <div className="hscroll">
      {records.map(record => <Record key={record.id} record={record} />)}
      <div>
        <input
          type="number"
          value={recordInput}
          onChange={e => setRecordInput(e.target.value)}
        />
        <button type="button" onClick={apiSaveRecord}>Add Record</button>
        {error ? <p>{error}</p> : null}
      </div>
      <Link to="/tracks">Tracks</Link>
      <button
        type="button"
        className="button"
        onClick={apiDeleteTrack}
      >
        DeleteTrack
      </button>
    </div>
  );
};

Records.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  user: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
  error: PropTypes.func.isRequired,
  setRecords: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  match: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
  history: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
  records: state.records,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setRecords: tracks => dispatch(setRecords(tracks)),
  setError: error => dispatch(setError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Records);
