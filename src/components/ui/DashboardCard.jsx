const DashboardCard = ({ icon, mainText, secondaryText }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-[10px] bg-white py-10 last:hidden xl:last:flex">
      <div className="flex items-center gap-2">
        <span className="text-brand-primary">{icon}</span>
        <p className="text-3xl font-semibold">{mainText}</p>
      </div>
      <p className="text-center text-sm text-brand-text-gray">
        {secondaryText}
      </p>
    </div>
  );
};

export default DashboardCard;
