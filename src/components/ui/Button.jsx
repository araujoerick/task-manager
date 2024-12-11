const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "text-white bg-brand-primary hover:bg-brand-primary/70";
    }
    if (variant === "secondary") {
      return "text-brand-dark-blue bg-brand-dark-blue/10 hover:bg-brand-dark-blue/15";
    }
    if (variant === "ghost") {
      return "text-brand-dark-gray bg-transparent hover:bg-brand-dark-gray/15";
    }
  };

  const getSizeClasses = () => {
    if (size === "small") {
      return "px-3 py-1 text-xs";
    }
    if (size === "medium") {
      return "text-sm px-6 py-2";
    }
    if (size === "large") {
      return "text-base px-8 py-3";
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-md font-semibold transition ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
