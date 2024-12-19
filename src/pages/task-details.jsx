import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ArrowLeftIcon, ChevronRightIcon, TrashIcon } from "../assets/icons";
import Sidebar from "../components/Sidebar";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import TimeSelect from "../components/ui/TimeSelect";

const TaskDetailsPage = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`);
      const data = await response.json();
      setTask(data);
    };

    fetchTask();
  }, [taskId]);

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
            <span className="cursor-pointer text-xs" onClick={handleBackClick}>
              Minhas Tarefas
            </span>
            <ChevronRightIcon />
            <span className="text-xs font-semibold text-brand-primary">
              {task?.title}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-xl font-semibold">{task?.title}</h1>
            <Button color="danger">
              <TrashIcon />
              Deletar tarefa
            </Button>
          </div>
        </div>

        <div className="space-y-6 rounded-xl bg-brand-white p-6">
          <div>
            <Input id="title" label="Título" value={task?.title} />
          </div>
          <div>
            <TimeSelect value={task?.time} />
          </div>
          <div>
            <Input
              id="description"
              label="Descrição"
              value={task?.description}
            />
          </div>

          {/* <Input
                id="title"
                label="Título"
                placeholder="Nome da tarefa"
                error={titleError}
                ref={titleRef}
                disabled={isLoading}
              /> */}
        </div>

        <div className="flex w-full justify-end gap-2">
          <Button size="medium" color="secondary">
            Cancelar
          </Button>
          <Button size="medium">Salvar</Button>
        </div>
      </section>
    </div>
  );
};

export default TaskDetailsPage;
