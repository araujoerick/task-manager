import { CloudSunIcon, MoonIcon, SunIcon } from "../assets/icons/";
import { useGetTasks } from "../hooks/data/use-get-tasks";
import Header from "./Header";
import TaskItem from "./TaskItem";
import TasksSeparator from "./TasksSeparator";

const Tasks = () => {
  const { data: tasks } = useGetTasks();

  const sortedTasks = tasks
    ?.slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const morningTasks = sortedTasks?.filter((task) => task.time === "morning");
  const afternoonTasks = sortedTasks?.filter(
    (task) => task.time === "afternoon",
  );
  const eveningTasks = sortedTasks?.filter((task) => task.time === "evening");

  return (
    <section className="w-full max-w-[1185px] space-y-4 px-4 pb-8 pt-8 xs:space-y-6 xs:px-8 lg:ml-64 lg:pt-16">
      <Header subtitle="Minhas Tarefas" title="Minhas Tarefas" />
      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator icon={<SunIcon />} title="Manhã" />
          {morningTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da manhã.
            </p>
          )}
          {morningTasks?.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator icon={<CloudSunIcon />} title="Tarde" />
          {afternoonTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da tarde.
            </p>
          )}
          {afternoonTasks?.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>

        <div className="space-y-3">
          <TasksSeparator icon={<MoonIcon />} title="Noite" />
          {eveningTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da noite.
            </p>
          )}
          {eveningTasks?.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tasks;
