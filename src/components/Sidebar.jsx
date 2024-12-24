import { HomeIcon, TasksIcon } from "../assets/icons/";
import SidebarButton from "./ui/SidebarButton";

const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-screen justify-between bg-white pr-8 lg:h-screen lg:max-w-64 lg:flex-col lg:justify-start lg:pr-0">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-brand-primary">
          Task Manager
        </h1>
        <p className="hidden lg:inline-block">
          Um simples{" "}
          <span className="text-brand-primary">organizador de tarefas</span>.
        </p>
      </div>
      <div className="flex gap-2 p-2 lg:flex-col">
        <SidebarButton to="/">
          <HomeIcon />
          Início
        </SidebarButton>
        <SidebarButton to="/tasks">
          <TasksIcon />
          Minhas Tarefas
        </SidebarButton>
      </div>
    </nav>
  );
};

export default Sidebar;
