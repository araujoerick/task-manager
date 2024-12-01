// import CheckIcon from "../assets/icons/check.svg?react";

const TaskItem = ({ task }) => {
  const getStatus = () => {
    if (task.status === "done") {
      return "bg-primary/10 text-primary";
    }
    if (task.status === "in_progress") {
      return "bg-[#FFAA04]/10 text-[#FFAA04]";
    }
    if (task.status === "not_started") {
      return "bg-[#35383E]/10 text-[#35383E]";
    }
  };

  return (
    <div
      className={`flex items-center gap-3 rounded-lg p-3 text-sm ${getStatus()}`}
    >
      {/* <CheckIcon className="h-6 w-6 rounded-md bg-primary p-1" /> */}
      {task.title}
    </div>
  );
};

export default TaskItem;
