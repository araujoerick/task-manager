import { HomeIcon, TasksIcon } from "../assets/icons/";
import SidebarButton from "./ui/SidebarButton";

const Sidebar = () => {
  return (
    <aside className="flex h-screen min-w-64 flex-col bg-white">
      <div>
        <div className="space-y-4 px-8 py-6">
          <h1 className="text-xl font-semibold text-brand-primary">
            Task Manager
          </h1>
          <p>
            Um simples{" "}
            <span className="text-brand-primary">organizador de tarefas</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <SidebarButton href="/">
            <HomeIcon />
            Início
          </SidebarButton>
          <SidebarButton href="/tasks" color="selected">
            <TasksIcon />
            Minhas Tarefas
          </SidebarButton>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
