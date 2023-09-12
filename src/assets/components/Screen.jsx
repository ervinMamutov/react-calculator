import './Screen.css';
import PropTypes from 'prop-types';

const Screen = ({ value }) => {
  return (
    <div className="screen-container">
      <h2 className="screen-text">{value}</h2>;
    </div>
  );
};

Screen.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Screen;
