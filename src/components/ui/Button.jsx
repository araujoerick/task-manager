import PropTypes from "prop-types";
import { tv } from "tailwind-variants";

const Button = ({ children, className, color, size, ...rest }) => {
  const button = tv({
    base: "flex items-center justify-center gap-2 rounded-md font-semibold transition disabled:cursor-not-allowed disabled:opacity-50",
    variants: {
      color: {
        primary: "bg-brand-primary text-brand-white hover:bg-brand-primary/70",
        secondary:
          "bg-brand-dark-blue/10 text-brand-dark-blue hover:bg-brand-dark-blue/15",
        ghost:
          "bg-transparent text-brand-dark-gray hover:bg-brand-dark-gray/15",
        danger: "bg-brand-danger text-brand-white hover:bg-brand-danger/80",
      },
      size: {
        small: "px-3 py-1 text-xs",
        medium: "px-4 py-2 text-sm",
        large: "px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  });

  return (
    <button className={button({ className, color, size })} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "ghost", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Button;
