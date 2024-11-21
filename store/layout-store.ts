import { create } from "zustand";

interface LayoutState {
  isOpen: boolean;
  shouldClose: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setShouldClose: (shouldClose: boolean) => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  isOpen: false,
  shouldClose: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  setShouldClose: (shouldClose) => set({ shouldClose }),
}));
