import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, computeFunction } = props;

  return (
    <button type="button" onClick={computeFunction} name={name}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  computeFunction: PropTypes.func.isRequired,
};
export default Button;
