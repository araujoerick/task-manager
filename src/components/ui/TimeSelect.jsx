import { forwardRef } from "react";

import InputLabel from "./InputLabel";

const TimeSelect = forwardRef(({ ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horário</InputLabel>
      <select
        name="time"
        id="time"
        className="rounded-lg border border-[#ECECEC] px-4 py-3 text-[#35383E] outline-primary"
        ref={ref}
        {...props}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
    </div>
  );
});

TimeSelect.displayName = "TimeSelect";

export default TimeSelect;
