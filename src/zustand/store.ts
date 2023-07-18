import create from "zustand";

interface TestStore {
  count: number;
  inc: () => void;
  dec: () => void;
}

const store = create<TestStore>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export default store;
