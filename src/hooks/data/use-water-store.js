import { create } from "zustand";

export const useWaterStore = create((set) => ({
  totalLiters: 0,
  goal: 2.5,
  selectedValues: [],

  setLiters: (value) =>
    set(() => ({
      totalLiters: value,
      selectedValues: [0.5, 1, 1.5, 2, 2.5].filter(
        (lowValue) => lowValue <= value,
      ),
    })),
}));
