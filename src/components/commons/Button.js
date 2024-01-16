import PropTypes from 'prop-types';

const Button = ({ text, onClick, ...restProps }) => {
  return (
    <button
      onClick={onClick}
      className="2xl:px-8 2xl:py-5 2xl:text-xl px-4 py-2.5 mt-[60px] text-white bg-lightgreen mb-5 w-full rounded-full"
      {...restProps}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
