import { forwardRef } from "react";

import InputErrorMessage from "../helper/InputErrorMessage";
import InputLabel from "./InputLabel";

const Input = forwardRef(({ label, error, ...props }, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={props.id}>{label}</InputLabel>
      <input
        className="rounded-lg border border-[#ECECEC] px-4 py-3 outline-primary placeholder:text-sm placeholder:text-textGray"
        ref={ref}
        {...props}
      />
      {error && <InputErrorMessage>{error.errorMessage}</InputErrorMessage>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
