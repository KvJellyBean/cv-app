import PropTypes from "prop-types";

function Button({ title, className = null, onPress = null }) {
  return (
    <button type="button" onClick={onPress} className={className}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
