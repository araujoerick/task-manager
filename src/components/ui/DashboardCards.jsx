import {
  GlassWaterIcon,
  Loader2Icon,
  Tasks2Icon,
  TasksIcon,
} from "../../assets/icons";
import { useGetTasks } from "../../hooks/data/use-get-tasks";
import { useWaterStore } from "../../hooks/data/use-water-store";
import DashboardCard from "./DashboardCard";

const DashboardCards = () => {
  const { data: tasks } = useGetTasks();

  const inProgressTasks = tasks?.filter(
    (task) => task.status === "in_progress",
  ).length;
  const doneTasks = tasks?.filter((task) => task.status === "done").length;

  const totalLiters = useWaterStore((state) => state.totalLiters);
  const goal = useWaterStore((state) => state.goal);
  const waterPercentege = Math.round((totalLiters / goal) * 100);

  return (
    <div className="grid grid-cols-2 gap-4 xs:gap-8 md:grid-cols-3 xl:grid-cols-4">
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
        className="xl:col-span-2"
        icon={<GlassWaterIcon />}
        mainText={`${waterPercentege}%`}
        secondaryText="Hidratação"
      />
    </div>
  );
};

export default DashboardCards;
