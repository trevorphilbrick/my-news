import { create } from "zustand";

export type UseMockData = {
  isUsingMockData: boolean;
  setMockData: (isUsingMockData: boolean) => void;
};

const useMockData = create<UseMockData>()((set) => ({
  isUsingMockData: true,
  setMockData: (isUsingMockData: boolean) => set(() => ({ isUsingMockData })),
}));

export default useMockData;
