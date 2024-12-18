import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TaskDetailsPage = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState();

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`);
      const data = await response.json();
      setTask(data);
    };

    fetchTask();
  }, [taskId]);

  return (
    <div>
      <h1>Detalhes da Tarefa</h1>
      <p>Titulo: {task?.title}</p>
      <p>Descricão: {task?.description}</p>
      <p>Horário: {task?.time}</p>
    </div>
  );
};

export default TaskDetailsPage;
