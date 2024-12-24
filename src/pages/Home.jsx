import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskItem from "../components/TaskItem";
import DashboardCards from "../components/ui/DashboardCards";
import WaterTracker from "../components/ui/WaterTracker";
import { useGetTasks } from "../hooks/data/use-get-tasks";

const HomePage = () => {
  const { data: tasks } = useGetTasks();

  return (
    <div className="flex">
      <Sidebar />
      <section className="w-full space-y-6 px-8 py-16">
        <Header subtitle={"Início"} title={"Dashboard"} />
        <DashboardCards />
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6 rounded-[10px] bg-brand-white p-6">
            <div>
              <h3 className="text-xl font-semibold">Tarefas</h3>
              <span className="text-sm text-brand-text-gray">
                Resumo das tarefas disponíveis
              </span>
            </div>
            <div className="space-y-3">
              {tasks?.slice(0, 6).map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </div>
          <div>
            <div className="col-span-2 space-y-6 rounded-[10px] bg-brand-white p-6">
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
