import {create} from "zustand"

export interface IBearStore {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
    updateBears: (newBears: number) => void;
}

export const useBearStore = create<IBearStore>()((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({bears: state.bears + 1})),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
}));

