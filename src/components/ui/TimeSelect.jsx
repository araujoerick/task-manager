import InputLabel from "./InputLabel";

const TimeSelect = ({ ...props }) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horário</InputLabel>
      <select
        name="time"
        id="time"
        className="rounded-lg border border-[#ECECEC] px-4 py-3 text-[#35383E] outline-primary"
        {...props}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
    </div>
  );
};

export default TimeSelect;
