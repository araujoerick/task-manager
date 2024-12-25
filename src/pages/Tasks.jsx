import Sidebar from "../components/Sidebar";
import Tasks from "../components/Tasks";

function TasksPage() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default TasksPage;
