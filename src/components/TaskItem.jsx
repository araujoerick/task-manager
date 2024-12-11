import {
  CheckIcon,
  DetailsIcon,
  LoaderIcon,
  TrashIcon,
} from "../assets/icons/";
import Button from "./ui/Button";

const TaskItem = ({ task, handleCheckboxClick, handleDeleteClick }) => {
  const getStatusClasses = () => {
    if (task.status === "done") {
      return "bg-brand-primary text-primary";
    }
    if (task.status === "in_progress") {
      return "bg-brand-process text-brand-process";
    }
    if (task.status === "not_started") {
      return "bg-brand-dark-blue/10 text-brand-dark-blue";
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
            onChange={() => handleCheckboxClick(task.id)}
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderIcon className="animate-[spin_2s_ease-in-out] text-white" />
          )}
        </label>
        <p className="select-text">{task.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button color="ghost" onClick={() => handleDeleteClick(task.id)}>
          <TrashIcon className="text-brand-text-gray" />
        </Button>
        <a href="#" className="transition hover:opacity-75">
          <DetailsIcon />
        </a>
      </div>
    </div>
  );
};

export default TaskItem;
