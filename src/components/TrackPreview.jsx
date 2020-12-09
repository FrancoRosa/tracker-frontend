import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Circle } from 'rc-progress';

const TrackPreview = ({ track, setTrack }) => {
  const {
    id,
    name,
    goal,
    category,
  } = track;

  const progress = goal === 0 ? track.last_record : ((100 * track.last_record) / goal).toFixed(0);

  const CategoryIcon = ({ category }) => {
    switch (category) {
      case 'Time':
        return <i className="trackIcon far fa-clock" />;
      case 'Finance':
        return <i className="trackIcon fas fa-money-bill-alt" />;
      case 'Education':
        return <i className="trackIcon fas fa-graduation-cap" />;
      case 'Fitness':
        return <i className="trackIcon fas fa-running" />;
      default:
        return <i className="trackIcon fas fa-question" />;
    }
  };

  CategoryIcon.propTypes = {
    category: PropTypes.string.isRequired,
  };

  return (
    <div key={id} className="card preview">
      <p className="title">{name}</p>
      <div className="progress">
        <Circle
          className="circle"
          strokeWidth="10"
          trailWidth="10"
          percent={progress}
        />
        <p className="progress-value">{progress}</p>
        <CategoryIcon
          className="category-icon"
          category={category}
        />
      </div>
      <div className="actions">
        <Link to={`/tracks/${id}`} onClick={() => setTrack(id)}>
          <i className="fas fa-tasks " />
        </Link>
        <Link to={`/addrecord/${id}`} onClick={() => setTrack(id)}>
          <i className="fas fa-plus-circle" />
        </Link>
      </div>
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
