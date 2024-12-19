import { useEffect, useRef, useState } from "react";
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
  const [saveIsLoading, setSaveIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const timeRef = useRef();

  const handleSaveClick = async () => {
    setSaveIsLoading(true);
    const newErrors = [];
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const time = timeRef.current.value;

    if (!title.trim()) {
      newErrors.push({
        inputName: "title",
        errorMessage: "O nome da tarefa é obrigatório.",
      });
    }

    if (!description.trim()) {
      newErrors.push({
        inputName: "description",
        errorMessage: "A descrição da tarefa e obrigatória.",
      });
    }

    setErrors(newErrors);
    if (newErrors.length > 0) {
      return setSaveIsLoading(false);
    }

    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title,
        description,
        time,
      }),
    });
    if (!response.ok) {
      setSaveIsLoading(false);
      return toast.error("Erro ao criar tarefa");
    }

    const newTask = await response.json();
    setTask(newTask);
    toast.success("Tarefa atualizada com sucesso!");
    setSaveIsLoading(false);
  };

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

  const titleError = errors.find((error) => error.inputName === "title");
  const descriptionError = errors.find(
    (error) => error.inputName === "description",
  );

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
            <Button color="danger">
              <TrashIcon />
              Deletar tarefa
            </Button>
          </div>
        </div>

        <div className="space-y-6 rounded-xl bg-brand-white p-6">
          <div>
            <Input
              id="title"
              label="Título"
              defaultValue={task?.title}
              disabled={saveIsLoading}
              error={titleError}
              ref={titleRef}
            />
          </div>
          <div>
            <TimeSelect
              defaultValue={task?.time}
              disabled={saveIsLoading}
              ref={timeRef}
            />
          </div>
          <div>
            <Input
              id="description"
              label="Descrição"
              defaultValue={task?.description}
              disabled={saveIsLoading}
              error={descriptionError}
              ref={descriptionRef}
            />
          </div>
        </div>

        <div className="flex w-full justify-end gap-2">
          <Button
            size="medium"
            onClick={handleSaveClick}
            disabled={saveIsLoading}
          >
            {saveIsLoading && <LoaderIcon className="animate-spin" />}
            Salvar
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TaskDetailsPage;
