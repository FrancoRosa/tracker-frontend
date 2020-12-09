import PropTypes from 'prop-types';
import moment from 'moment';

const timeago = createdAt => moment(createdAt).fromNow();

const Record = ({ record, track }) => (
  <div className="card record">
    <p>{`${track.name}: ${record.value}/${track.goal}`}</p>
    <p>{`Recorded ${timeago(record.created_at)}.`}</p>
  </div>
);

Record.propTypes = {
  record: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
  track: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
};

export default Record;
