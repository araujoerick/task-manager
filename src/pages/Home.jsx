import { Link } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskItem from "../components/TaskItem";
import DashboardCards from "../components/ui/DashboardCards";
import WaterTracker from "../components/ui/WaterTracker";
import { useGetTasks } from "../hooks/data/use-get-tasks";

const HomePage = () => {
  const { data: tasks } = useGetTasks();

  const filteredTasks = tasks?.filter((task) => task.status !== "done");

  const sortedTasks = filteredTasks
    ?.slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <section className="w-full max-w-[1185px] space-y-4 px-4 pb-8 pt-8 xs:space-y-6 xs:px-8 lg:ml-64 lg:pt-16">
        <Header subtitle={"Início"} title={"Dashboard"} />
        <DashboardCards />
        <div className="grid gap-4 xs:gap-8 md:grid-cols-3">
          <div className="space-y-6 rounded-[10px] bg-brand-white p-6 md:col-span-2">
            <div className="">
              <h3 className="text-xl font-semibold">Tarefas</h3>
              <div className="flex justify-between">
                <span className="text-sm text-brand-text-gray">
                  Resumo das tarefas disponíveis
                </span>
                <Link to={"/tasks"} className="text-sm text-brand-primary">
                  Ver mais...
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {sortedTasks?.length === 0 && (
                <p className="text-sm text-brand-dark-gray">
                  Nenhuma tarefa disponível.
                </p>
              )}
              {sortedTasks?.slice(0, 6).map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </div>
          <div>
            <div className="space-y-6 rounded-[10px] bg-brand-white p-6">
              <div>
                <h3 className="text-xl font-semibold">Água</h3>
                <span className="text-sm text-brand-text-gray">
                  Beba sua meta diária de água
                </span>
              </div>
              <div className="space-y-3">
                <WaterTracker />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
