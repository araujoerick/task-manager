const DashboardCard = ({ icon, mainText, secondaryText }) => {
  return (
    <div className="flex w-64 flex-col items-center gap-2 rounded-[10px] bg-white px-8 py-10">
      <div className="flex items-center gap-2">
        <span className="text-brand-primary">{icon}</span>
        <p className="text-3xl font-semibold">{mainText}</p>
      </div>
      <p>{secondaryText}</p>
    </div>
  );
};

export default DashboardCard;
