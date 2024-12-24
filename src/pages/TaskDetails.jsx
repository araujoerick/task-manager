import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

import { ArrowLeftIcon, ChevronRightIcon, TrashIcon } from "../assets/icons";
import Sidebar from "../components/Sidebar";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import TimeSelect from "../components/ui/TimeSelect";
import { useDeleteTask } from "../hooks/data/use-delete-task";
import { useGetTask } from "../hooks/data/use-get-task";
import { useUpdateTask } from "../hooks/data/use-update-task";

const TaskDetailsPage = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: task } = useGetTask({
    taskId,
    onSuccess: reset,
  });

  const { mutate: updateTask, isPending: isUpdating } = useUpdateTask(taskId);

  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTask(taskId);

  const handleSaveClick = async (data) => {
    updateTask(data, {
      onSuccess: () => {
        toast.success("Tarefa atualizada com sucesso!");
        navigate(-1);
      },
      onError: () => {
        toast.error("Erro ao atualizar tarefa!");
      },
    });
  };

  const handleDeleteClick = async () => {
    deleteTask(undefined, {
      onSuccess: () => {
        toast.success("Tarefa deletada com sucesso!");
        navigate(-1);
      },
      onError: () => {
        toast.error("Erro ao deletar tarefa!");
      },
    });
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex">
      <Sidebar />
      <section className="ml-64 flex w-full max-w-[1185px] flex-col gap-6 px-8 py-16">
        <div>
          <button
            onClick={handleBackClick}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary"
          >
            <ArrowLeftIcon />
          </button>
          <div className="mb-2 mt-3 flex items-center gap-2 text-brand-text-gray">
            <Link className="cursor-pointer text-xs" to={"/tasks"}>
              Minhas Tarefas
            </Link>
            <ChevronRightIcon />
            <span className="text-xs font-semibold text-brand-primary">
              {task?.title}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-xl font-semibold">{task?.title}</h1>
            <Button
              color="danger"
              onClick={handleDeleteClick}
              disabled={isUpdating || isDeleting}
            >
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
                disabled={isUpdating || isDeleting}
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
                disabled={isUpdating || isDeleting}
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
                disabled={isUpdating || isDeleting}
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
            <div className="flex w-full justify-end gap-2">
              <Button
                type="submit"
                size="medium"
                disabled={isUpdating || isDeleting}
              >
                Salvar
              </Button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default TaskDetailsPage;
