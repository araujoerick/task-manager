const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <label
        className="text-sm font-semibold text-[#35383E]"
        htmlFor={props.id}
      >
        {label}
      </label>
      <input
        className="rounded-lg border border-[#ECECEC] px-4 py-3 outline-primary placeholder:text-sm placeholder:text-textGray"
        {...props}
      />
    </div>
  );
};

export default Input;
