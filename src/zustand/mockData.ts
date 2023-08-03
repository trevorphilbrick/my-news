import { create } from "zustand";

export type UseMockData = {
  isUsingMockData: boolean;
  setMockData: (isUsingMockData: boolean) => void;
};

const useMockData = create<UseMockData>()((set) => ({
  isUsingMockData: false,
  setMockData: (isUsingMockData: boolean) => set(() => ({ isUsingMockData })),
}));

export default useMockData;
