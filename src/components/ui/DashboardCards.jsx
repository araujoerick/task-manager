import {
  GlassWaterIcon,
  Loader2Icon,
  Tasks2Icon,
  TasksIcon,
} from "../../assets/icons";
import { useGetTasks } from "../../hooks/data/use-get-tasks";
import DashboardCard from "./DashboardCard";

const DashboardCards = () => {
  const { data: tasks } = useGetTasks();

  const inProgressTasks = tasks?.filter(
    (task) => task.status === "in_progress",
  ).length;
  const doneTasks = tasks?.filter((task) => task.status === "done").length;

  return (
    <div className="flex flex-wrap gap-8">
      <DashboardCard
        icon={<Tasks2Icon />}
        mainText={tasks?.length}
        secondaryText="Tarefas disponíveis"
      />
      <DashboardCard
        icon={<TasksIcon />}
        mainText={doneTasks}
        secondaryText="Tarefas concluídas"
      />
      <DashboardCard
        icon={<Loader2Icon className="animate-[spin_2s_ease-in-out]" />}
        mainText={inProgressTasks}
        secondaryText="Tarefas em andamento"
      />
      <DashboardCard
        icon={<GlassWaterIcon />}
        mainText="40%"
        secondaryText="Hidratação"
      />
    </div>
  );
};

export default DashboardCards;
