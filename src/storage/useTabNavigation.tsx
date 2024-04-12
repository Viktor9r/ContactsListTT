import create from "zustand";

export interface ITab {
  value: number;
  setValue: (newValue: number) => void;
}

export const useTabNavigation = create<ITab>((set) => ({
  value: 0,
  setValue: (newValue: number) => {
    set({ value: newValue });
  },
}));
