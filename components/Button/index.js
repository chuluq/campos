import PropTypes from "prop-types";
import styles from "@/components/Button/Button.module.css";

export default function Button({ title, dark }) {
  return (
    <button className={!dark ? styles.btn : styles.btnDark}>{title}</button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
};
