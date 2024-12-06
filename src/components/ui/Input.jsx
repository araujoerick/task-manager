import InputLabel from "./InputLabel";

const Input = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={props.id}>{label}</InputLabel>
      <input
        className="rounded-lg border border-[#ECECEC] px-4 py-3 outline-primary placeholder:text-sm placeholder:text-textGray"
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error.errorMessage}</p>}
    </div>
  );
};

export default Input;
