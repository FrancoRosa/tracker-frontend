import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrackPreview = ({ track, setTrack }) => {
  const {
    id,
    name,
    goal,
    category,
  } = track;

  return (
    <div key={id}>
      <ul>
        <li>
          name:
          {name}
        </li>
        <li>
          goal:
          {goal}
        </li>
        <li>
          category:
          {category}
        </li>
        <li>
          last_record:
          {track.last_record}
        </li>
        <li>
          updated_at:
          {track.updated_at}
        </li>
        <Link to={`/tracks/${id}`} onClick={() => setTrack(id)}>
          {name}
        </Link>
      </ul>
      <br />
    </div>
  );
};

TrackPreview.propTypes = {
  track: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
  setTrack: PropTypes.func.isRequired,
};

export default TrackPreview;
