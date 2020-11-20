import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { setError, setRecords } from '../actions';
import { API_URL } from '../backend';

const Records = ({
  records,
  user,
  error,
  setRecords,
  setError,
}) => {
  const [record, setRecord] = useState('');

  const apiGetRecords = async () => {
    const { data: response } = await axios.get(`${API_URL}api/v1/records/?token=${user.token}`);
    if (response.error) setError(response.error);
    else setRecords(response);
  };

  const apiSaveRecord = async () => {
    const obj = {
      record: {
        name: record,
      },
    };

    const { data: response } = await axios.post(`${API_URL}api/v1/records/?token=${user.token}`, obj);
    if (response.error) {
      setError(response.error);
    } else {
      setRecord('');
      setRecords(response);
    }
  };

  useEffect(() => {
    apiGetRecords();
  }, []);

  return (
    <div>
      <div>
        {records.map(record => <p key={record.id}>{record.value}</p>)}
      </div>
      <div>
        <input
          type="text"
          value={record}
          onChange={e => setRecord(e.target.value)}
        />
        <button type="button" onClick={apiSaveRecord}>Add Record</button>
        {error ? <p>{error}</p> : null}
      </div>
      <Link to="/signin">Sign in</Link>
    </div>
  );
};

Records.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  user: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
  error: PropTypes.func.isRequired,
  setRecords: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
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
