const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === "unselected") {
      return "text-[#35383E] hover:bg-[#35383E]/10";
    }
    if (variant === "selected") {
      return "text-primary bg-primary/10";
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
