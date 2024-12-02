const Button = ({ children, variant = "primary", ...rest }) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "text-white bg-primary hover:bg-primary/70";
    }
    if (variant === "ghost") {
      return "text-[#818181] bg-transparent hover:bg-[#818181]/15";
    }
  };

  return (
    <button
      className={`flex items-center gap-2 rounded-md px-3 py-1 text-xs font-semibold transition ${getVariantClasses()}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
