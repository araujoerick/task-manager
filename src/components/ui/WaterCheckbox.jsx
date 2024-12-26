import { CheckIcon } from "../../assets/icons";
import { useWaterStore } from "../../hooks/data/use-water-store";

const WaterCheckbox = ({ label, value }) => {
  const selectedValues = useWaterStore((state) => state.selectedValues);
  const setLiters = useWaterStore((state) => state.setLiters);

  const handleChange = async () => {
    await setLiters(value);
  };

  const getStatusClasses = () => {
    if (selectedValues.includes(value)) {
      return "bg-brand-primary text-primary";
    }
    if (!selectedValues.includes(value)) {
      return "bg-brand-dark-blue/5 text-brand-dark-blue";
    }
  };

  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-lg bg-opacity-10 p-3 text-sm transition ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-opacity-100 ${getStatusClasses()}`}
        >
          <input
            className="absolute h-full w-full cursor-pointer opacity-0"
            type="checkbox"
            checked={selectedValues.includes(value)}
            onChange={handleChange}
          />
          {selectedValues.includes(value) && <CheckIcon />}
        </label>
        <p className="select-text">{label}</p>
      </div>
    </div>
  );
};

export default WaterCheckbox;
