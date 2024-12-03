import { HomeIcon, TasksIcon } from "../assets/icons/";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-72 flex-col bg-white">
      <div>
        <div className="space-y-4 px-8 py-6">
          <h1 className="text-xl font-semibold text-primary">Task Manager</h1>
          <p>
            Um simples{" "}
            <span className="text-primary">organizador de tarefas</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <SidebarButton variant="unselected">
            <HomeIcon />
            Início
          </SidebarButton>
          <SidebarButton variant="selected">
            <TasksIcon />
            Minhas Tarefas
          </SidebarButton>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
