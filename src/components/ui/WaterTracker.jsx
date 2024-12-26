import { useEffect } from "react";

import { GlassWaterIcon } from "../../assets/icons";
import { useWaterStore } from "../../hooks/data/use-water-store";
import WaterCheckbox from "./WaterCheckbox";

const WaterTracker = () => {
  const totalLiters = useWaterStore((state) => state.totalLiters);
  const goal = useWaterStore((state) => state.goal);
  const waterPercentege = Math.round((totalLiters / goal) * 100);
  const fetchWaterData = useWaterStore((state) => state.fetchWaterData);
  const generateValuesUpToGoal = useWaterStore(
    (state) => state.generateValuesUpToGoal,
  );
  const values = generateValuesUpToGoal(goal);

  useEffect(() => {
    fetchWaterData();
  }, [fetchWaterData]);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-0 lg:flex lg:justify-between">
      <div className="flex flex-col items-center justify-center gap-2 md:hidden">
        <div className="flex items-center gap-2">
          <span className="text-brand-primary">
            <GlassWaterIcon />
          </span>
          <p className="text-3xl font-semibold">{waterPercentege}%</p>
        </div>
        <p className="text-center text-sm text-brand-text-gray">Hidratação</p>
      </div>

      <div className="w-full space-y-3 xl:w-auto">
        {values.map((value) => (
          <WaterCheckbox
            key={value}
            label={
              value === 0.5
                ? "500 ml"
                : `${value.toFixed(1)} litro${value > 1 ? "s" : ""}`
            }
            value={value}
          />
        ))}
      </div>
      <div className="self-end">
        <p className="hidden text-right text-xs xl:inline-block">
          <span className="text-xl font-semibold text-brand-primary">
            {totalLiters} litro{totalLiters > 1 && "s"}
          </span>
          <span>/{goal}L</span>
        </p>
      </div>
    </div>
  );
};

export default WaterTracker;
