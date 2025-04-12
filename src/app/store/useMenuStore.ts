import { create } from 'zustand';

type MenuState = {
  isOpen: boolean;
  closeMobileMenu: () => void;
  toggleMenu: () => void;
};

export const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  closeMobileMenu: () => set({ isOpen: false }),
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
