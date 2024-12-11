const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === "unselected") {
      return "text-brand-dark-blue hover:bg-brand-dark-blue/10";
    }
    if (variant === "selected") {
      return "text-brand-primary bg-brand-primary/10";
    }
  };

  return (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-lg px-6 py-3 text-left ${getVariantClasses()}`}
    >
      {children}
    </a>
  );
};

export default SidebarButton;
