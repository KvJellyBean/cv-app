import PropTypes from "prop-types";

function Button({ title, id = null, className = null, onPress = null }) {
  return (
    <button type="button" id={id} onClick={onPress} className={className}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default Button;
