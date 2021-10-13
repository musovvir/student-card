import React, { useState } from "react"
import PropTypes from "prop-types"

const TextField = ({ label, name, type, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false)

  const getInputClasses = () => {
    return 1
    // return "form-control" + (error ? " is-invalid" : "")
  }
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        type={showPassword ? "text" : type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
      {type === "password" && (
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={toggleShowPassword}
        >
          <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
        </button>
      )}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

TextField.defaultProps = {
  type: "text"
}

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}

export default TextField
