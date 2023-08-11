import { create } from "zustand";
import { User } from 'firebase/auth'

export type AuthState = {
   user: User | Record<string, never>;
   setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
   user: {},
   setUser: (user: User) => set(() => ({user}))
}));

