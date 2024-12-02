import CheckIcon from "../assets/icons/check.svg?react";
import LoaderIcon from "../assets/icons/loader.svg?react";
import DetailsIcon from "../assets/icons/details.svg?react";

const TaskItem = ({ task, handleTaskCheckboxClick }) => {
  const getStatusClasses = () => {
    if (task.status === "done") {
      return "bg-primary text-primary";
    }
    if (task.status === "in_progress") {
      return "bg-[#FFAA04] text-[#FFAA04]";
    }
    if (task.status === "not_started") {
      return "bg-[#35383E]/10 text-[#35383E]";
    }
  };

  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-lg bg-opacity-10 p-3 text-sm transition ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-opacity-100 ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === "done"}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => handleTaskCheckboxClick(task.id)}
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderIcon className="animate-[spin_2s_ease-in-out] text-white" />
          )}
        </label>
        <p className="select-text">{task.title}</p>
      </div>
      <a href="#" className="transition hover:opacity-75">
        <DetailsIcon />
      </a>
    </div>
  );
};

export default TaskItem;
