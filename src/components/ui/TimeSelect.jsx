import { forwardRef } from "react";

import InputLabel from "./InputLabel";

const TimeSelect = forwardRef(({ ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horário</InputLabel>
      <select
        name="time"
        id="time"
        className="rounded-lg border border-brand-dark-border px-4 py-3 text-sm text-brand-dark-blue outline-brand-primary placeholder:text-brand-text-gray"
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
