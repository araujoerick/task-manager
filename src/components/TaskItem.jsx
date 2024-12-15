import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "sonner";

import {
  CheckIcon,
  DetailsIcon,
  LoaderIcon,
  TrashIcon,
} from "../assets/icons/";
import Button from "./ui/Button";

const TaskItem = ({ task, handleCheckboxClick, onDeleteSuccess }) => {
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);

  const handleDeleteClick = async () => {
    setDeleteIsLoading(true);
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      setDeleteIsLoading(false);
      return toast.error("Erro ao deletar tarefa");
    }

    onDeleteSuccess(task.id);
    setDeleteIsLoading(false);
  };

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
        <Button
          color="ghost"
          onClick={handleDeleteClick}
          disabled={deleteIsLoading}
        >
          {deleteIsLoading ? (
            <LoaderIcon className="animate-spin" />
          ) : (
            <TrashIcon className="text-brand-text-gray" />
          )}
        </Button>
        <a href="#" className="transition hover:opacity-75">
          <DetailsIcon />
        </a>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.oneOf(["not_started", "in_progress", "done"]).isRequired,
    time: PropTypes.oneOf(["morning", "afternoon", "evening"]).isRequired,
  }).isRequired,
  handleCheckboxClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default TaskItem;
