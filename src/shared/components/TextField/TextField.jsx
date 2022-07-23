import { nanoid } from "@reduxjs/toolkit";
import { useMemo } from "react";
import PropTypes from "prop-types";
import s from "./textField.module.css";

const TextField = (props) => {
  const {
    label,
    name,
    value,
    onChange,
    placeholder,
    required,
    type,
    pattern,
    title,
  } = props;
  const id = useMemo(() => nanoid(), []);

  return (
    <div className={s.wrapper}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input
        onChange={onChange}
        id={id}
        className={s.input}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
      />
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
  required: false,
  onChange: () => {},
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

export default TextField;
