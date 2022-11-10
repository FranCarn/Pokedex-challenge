import PropTypes from "prop-types";
export const toFirstCharUppercase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
toFirstCharUppercase.propTypes = {
  name: PropTypes.string.isRequired,
};
