import { ClipLoader } from "react-spinners";
import PropTypes from "prop-types";
import styles from "../App.module.css";
export const Loader = ({ speed }) => {
  return (
    <div className={styles.loader}>
      <ClipLoader color="#fafafa" speedMultiplier={speed} />
    </div>
  );
};
Loader.propTypes = {
  speed: PropTypes.number.isRequired,
};
