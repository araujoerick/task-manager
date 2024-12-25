import { useState } from "react";

import { HomeIcon, MenuIcon, TasksIcon } from "../assets/icons/";
import SidebarButton from "./ui/SidebarButton";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 flex w-full justify-between bg-white pr-8 drop-shadow-md lg:fixed lg:left-0 lg:h-screen lg:max-w-64 lg:flex-col lg:justify-start lg:pr-0 lg:drop-shadow-none">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-brand-primary">
          Task Manager
        </h1>
        <p className="hidden lg:inline-block">
          Um simples{" "}
          <span className="text-brand-primary">organizador de tarefas</span>.
        </p>
      </div>
      <div
        className={`${isMenuOpen ? "flex" : "hidden"} absolute right-2 top-[76px] flex flex-col gap-2 rounded-b-[10px] bg-brand-white p-3 md:p-2`}
      >
        <SidebarButton to="/">
          <HomeIcon />
          Início
        </SidebarButton>
        <SidebarButton to="/tasks">
          <TasksIcon />
          Minhas Tarefas
        </SidebarButton>
      </div>
      <div className="hidden gap-2 p-2 md:flex lg:flex-col">
        <SidebarButton to="/">
          <HomeIcon />
          Início
        </SidebarButton>
        <SidebarButton to="/tasks">
          <TasksIcon />
          Minhas Tarefas
        </SidebarButton>
      </div>
      <button
        type="button"
        className="flex items-center gap-2 bg-brand-primary px-4 text-white md:hidden"
        onClick={toggleMenu}
      >
        <MenuIcon />
      </button>
    </nav>
  );
};

export default Sidebar;
