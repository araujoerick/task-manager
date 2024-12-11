const TasksSeparator = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-2 border-b border-brand-border pb-1">
      {icon}
      <p className="text-sm text-brand-text-gray">{title}</p>
    </div>
  );
};

export default TasksSeparator;
