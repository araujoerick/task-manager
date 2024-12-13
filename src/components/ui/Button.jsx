import PropTypes from "prop-types";
import { tv } from "tailwind-variants";

const Button = ({ children, className, color, size, ...rest }) => {
  const button = tv({
    base: "flex items-center justify-center gap-2 rounded-md font-semibold transition",
    variants: {
      color: {
        primary: "bg-brand-primary text-white hover:bg-brand-primary/70",
        secondary:
          "bg-brand-dark-blue/10 text-brand-dark-blue hover:bg-brand-dark-blue/15",
        ghost:
          "bg-transparent text-brand-dark-gray hover:bg-brand-dark-gray/15",
      },
      size: {
        small: "px-3 py-1 text-xs",
        medium: "px-6 py-2 text-sm",
        large: "px-8 py-3 text-base",
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
  color: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Button;
