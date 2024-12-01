import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";

const Tasks = () => {
  return (
    <section className="w-full space-y-6 px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-primary">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3 self-end">
          <Button variant="ghost">
            Limpar tarefas
            <TrashIcon />
          </Button>
          <Button>
            Nova tarefa
            <AddIcon />
          </Button>
        </div>
      </div>
      <div className="rounded-xl bg-white p-6">
        {/* MANHÃ */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 border-b border-[#f4f4f5] pb-1">
            <SunIcon />
            <p className="text-sm text-textGray">Manhã</p>
          </div>
          <div>ir para academia</div>
          <div>momento devocional</div>
        </div>
        {/* TARDE */}
        <div className="my-6 space-y-3">
          <div className="flex items-center gap-2 border-b border-[#f4f4f5] pb-1">
            <CloudSunIcon />
            <p className="text-sm text-textGray">Tarde</p>
          </div>
          <div>ir para academia</div>
          <div>momento devocional</div>
        </div>
        {/* NOITE */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 border-b border-[#f4f4f5] pb-1">
            <MoonIcon />
            <p className="text-sm text-textGray">Noite</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
