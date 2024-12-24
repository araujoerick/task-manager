import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { tv } from "tailwind-variants";

const SidebarButton = ({ children, to }) => {
  const sidebar = tv({
    base: "flex items-center gap-2 rounded-lg px-6 py-3 text-left text-sm lg:text-base",
    variants: {
      color: {
        unselected:
          "text-brand-dark-blue transition-all hover:bg-brand-primary/10 hover:text-brand-primary",
        selected: "bg-brand-primary/10 text-brand-primary",
      },
    },
    defaultVariants: {
      color: "unselected",
    },
  });

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        sidebar({ color: isActive ? "selected" : "unselected" })
      }
    >
      {children}
    </NavLink>
  );
};

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["unselected", "selected"]),
};

export default SidebarButton;
