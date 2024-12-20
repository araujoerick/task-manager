import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LoaderIcon,
  TrashIcon,
} from "../assets/icons";
import Sidebar from "../components/Sidebar";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import TimeSelect from "../components/ui/TimeSelect";

const TaskDetailsPage = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm();

  const handleSaveClick = async (data) => {
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: data.title.trim(),
        description: data.description.trim(),
        time: data.time.trim(),
      }),
    });
    if (!response.ok) {
      return toast.error("Erro ao criar tarefa");
    }

    const newTask = await response.json();
    setTask(newTask);
    toast.success("Tarefa atualizada com sucesso!");
  };

  const handleDeleteClick = async () => {
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      return toast.error("Erro ao deletar tarefa");
    }
    navigate("/");
    toast.success("Tarefa deletada com sucesso!");
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`);
      const data = await response.json();
      setTask(data);
      reset(data);
    };

    fetchTask();
  }, [taskId, reset]);

  return (
    <div className="flex">
      <Sidebar />
      <section className="flex w-full flex-col gap-6 px-8 py-16">
        <div>
          <button
            onClick={handleBackClick}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary"
          >
            <ArrowLeftIcon />
          </button>
          <div className="mb-2 mt-3 flex items-center gap-2 text-brand-text-gray">
            <Link className="cursor-pointer text-xs" to="/">
              Minhas Tarefas
            </Link>
            <ChevronRightIcon />
            <span className="text-xs font-semibold text-brand-primary">
              {task?.title}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-xl font-semibold">{task?.title}</h1>
            <Button color="danger" onClick={handleDeleteClick}>
              <TrashIcon />
              Deletar tarefa
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleSaveClick)}>
          <div className="space-y-6 rounded-xl bg-brand-white p-6">
            <div>
              <Input
                id="title"
                label="Título"
                defaultValue={task?.title}
                disabled={isSubmitting}
                {...register("title", {
                  required: "O título é obrigatório.",
                  validate: (value) => {
                    if (!value.trim()) {
                      return "O título é obrigatório.";
                    }
                  },
                })}
                error={errors?.title?.message}
              />
            </div>
            <div>
              <TimeSelect
                defaultValue={task?.time}
                disabled={isSubmitting}
                {...register("time", {
                  required: "O horário é obrigatório.",
                })}
                error={errors?.time?.message}
              />
            </div>
            <div>
              <Input
                id="description"
                label="Descrição"
                defaultValue={task?.description}
                disabled={isSubmitting}
                {...register("description", {
                  required: "A descrição é obrigatória.",
                  validate: (value) => {
                    if (!value.trim()) {
                      return "A descrição é obrigatória.";
                    }
                  },
                })}
                error={errors?.description?.message}
              />
            </div>
          </div>

          <div className="flex w-full justify-end gap-2">
            <Button type="submit" size="medium" disabled={isSubmitting}>
              {isSubmitting && <LoaderIcon className="animate-spin" />}
              Salvar
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default TaskDetailsPage;
