import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setError, setRecords } from '../actions';
import { API_URL } from '../backend';
import Record from './Record';

const Records = ({
  records,
  user,
  setRecords,
  match,
  history,
  tracks,
}) => {
  const track = tracks.filter(track => track.id.toString() === match.params.id)[0];

  const apiGetRecords = async () => {
    setError('');
    const { data: response } = await axios.get(`${API_URL}api/v1/tracks/${match.params.id}/?token=${user.token}`);
    if (response.error) setError(response.error);
    else setRecords(response);
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
      <div className="track-title">
        <h2 className="title">{`${track.name} records`}</h2>
      </div>
      {records.map(record => <Record key={record.id} record={record} track={track} />)}
      <Link to="/tracks" onClick={apiDeleteTrack} className="delete-track">
        <i className="fas fa-trash-alt" />
      </Link>
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
  setRecords: PropTypes.func.isRequired,
  match: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
  history: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
  tracks: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

const mapStateToProps = state => ({
  records: state.records,
  user: state.user,
  tracks: state.tracks,
});

const mapDispatchToProps = dispatch => ({
  setRecords: tracks => dispatch(setRecords(tracks)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Records);
