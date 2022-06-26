import PropTypes from "prop-types";
import styles from "@/components/Button/Button.module.css";

export default function Button({ title }) {
  return <button className={styles.btn}>{title}</button>;
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
