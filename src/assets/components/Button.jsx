import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ text, style, clickHandler }) => {
  return (
    <button className={`btn ${style}`} onClick={clickHandler}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Button;
