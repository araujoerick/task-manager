import { create } from "zustand";

import { api } from "../../lib/axios";

export const useWaterStore = create((set) => ({
  totalLiters: 0,
  goal: 2.5,
  selectedValues: [],

  setLiters: async (value) => {
    const selectedValues = [0.5, 1, 1.5, 2, 2.5].filter(
      (lowValue) => lowValue <= value,
    );

    await api.post("/water-hydration", { liters: value });

    set(() => ({
      totalLiters: value,
      selectedValues,
    }));
  },

  fetchWaterData: async () => {
    const { data } = await api.get("/water-hydration");
    const totalLiters = data.reduce((sum, record) => sum + record.liters, 0);
    const selectedValues = [0.5, 1, 1.5, 2, 2.5].filter(
      (lowValue) => lowValue <= totalLiters,
    );

    set(() => ({
      totalLiters,
      selectedValues,
    }));
  },
}));
