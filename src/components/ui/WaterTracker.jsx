import { useWaterStore } from "../../hooks/data/use-water-store";
import WaterCheckbox from "./WaterCheckbox";

const WaterTracker = () => {
  const totalLiters = useWaterStore((state) => state.totalLiters);

  return (
    <div className="flex justify-between">
      <div className="space-y-3">
        <WaterCheckbox label="500 ml" value={0.5} />
        <WaterCheckbox label="1 litro" value={1} />
        <WaterCheckbox label="1.5 litros" value={1.5} />
        <WaterCheckbox label="2 litros" value={2} />
        <WaterCheckbox label="2.5 litros" value={2.5} />
      </div>
      <div className="self-end">
        <p className="text-right text-xs">
          <span className="text-xl font-semibold text-brand-primary">
            {totalLiters} litro{totalLiters > 1 && "s"}
          </span>
          /2.5L
        </p>
      </div>
    </div>
  );
};

export default WaterTracker;
