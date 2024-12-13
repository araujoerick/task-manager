import PropTypes from "prop-types";
import { tv } from "tailwind-variants";

const SidebarButton = ({ children, color }) => {
  const sidebar = tv({
    base: "flex items-center gap-2 rounded-lg px-6 py-3 text-left",
    variants: {
      color: {
        unselected:
          "text-brand-dark-blue hover:bg-brand-primary/10 hover:text-brand-primary",
        selected: "bg-brand-primary/10 text-brand-primary",
      },
    },
    defaultVariants: {
      color: "unselected",
    },
  });

  return (
    <a href="#" className={sidebar({ color })}>
      {children}
    </a>
  );
};

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["unselected", "selected"]),
};

export default SidebarButton;
