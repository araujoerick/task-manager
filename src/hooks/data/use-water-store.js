import { create } from "zustand";

import { api } from "../../lib/axios";

export const useWaterStore = create((set) => ({
  totalLiters: 0,
  goal: 3,
  selectedValues: [],

  generateValuesUpToGoal: (goal) => {
    const values = [];
    for (let i = 0.5; i <= goal; i += 0.5) {
      values.push(i);
    }
    return values;
  },

  setLiters: async (value) => {
    const selectedValues = useWaterStore
      .getState()
      .generateValuesUpToGoal(value)
      .filter((lowValue) => lowValue <= value);

    await api.post("/water-hydration", { liters: value });

    set(() => ({
      totalLiters: value,
      selectedValues,
    }));
  },

  fetchWaterData: async () => {
    const { data } = await api.get("/water-hydration");
    const totalLiters = data.reduce((sum, record) => sum + record.liters, 0);

    const selectedValues = useWaterStore
      .getState()
      .generateValuesUpToGoal(totalLiters)
      .filter((lowValue) => lowValue <= totalLiters);

    set(() => ({
      totalLiters,
      selectedValues,
    }));
  },
}));
