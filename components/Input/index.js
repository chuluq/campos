import PropTypes from "prop-types";
import styles from "@/components/Input/Input.module.css";

export default function Input({ label, placeholder, type, isRequired }) {
  return (
    <div className={styles.input}>
      <label htmlFor={label} className={styles.label}>
        {label}
        {isRequired && "*"}
      </label>
      {type === "textarea" ? (
        <textarea
          name={label}
          className={`${styles.textField} ${styles.textarea}`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type="text"
          className={styles.textField}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  isRequired: PropTypes.bool,
};
