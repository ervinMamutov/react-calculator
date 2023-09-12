import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return <div>{children}</div>;
};

Card.prototype = {
  children: PropTypes.node,
};

export default Card;
