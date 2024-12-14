import PropTypes from "prop-types";
import { forwardRef } from "react";

import InputErrorMessage from "../helper/InputErrorMessage";
import InputLabel from "./InputLabel";

const Input = forwardRef(({ label, error, ...props }, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={props.id}>{label}</InputLabel>
      <input
        className="rounded-lg border border-brand-dark-border px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
        ref={ref}
        {...props}
      />
      {error && <InputErrorMessage>{error.errorMessage}</InputErrorMessage>}
    </div>
  );
});

Input.displayName = "Input";

Input.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.object,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default Input;
