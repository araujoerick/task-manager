import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/ui/DashboardCards";

const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <section className="w-full space-y-6 px-8 py-16">
        <Header subtitle={"Início"} title={"Dashboard"} />
        <DashboardCards />
      </section>
    </div>
  );
};

export default HomePage;
