import {
  GlassWaterIcon,
  Loader2Icon,
  Tasks2Icon,
  TasksIcon,
} from "../assets/icons";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/ui/DashboardCard";
import { useGetTasks } from "../hooks/data/use-get-tasks";

const HomePage = () => {
  const { data: tasks } = useGetTasks();

  const inProgressTasks = tasks?.filter(
    (task) => task.status === "in_progress",
  ).length;
  const doneTasks = tasks?.filter((task) => task.status === "done").length;

  return (
    <div className="flex">
      <Sidebar />
      <section className="w-full space-y-6 px-8 py-16">
        <Header subtitle={"Início"} title={"Dashboard"} />
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
      </section>
    </div>
  );
};

export default HomePage;
