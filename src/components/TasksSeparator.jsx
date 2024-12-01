const TasksSeparator = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-2 border-b border-[#f4f4f5] pb-1">
      {icon}
      <p className="text-sm text-textGray">{title}</p>
    </div>
  );
};

export default TasksSeparator;
