import { create } from "zustand";

interface ProfileState {
  profileImage: string;
  fullName: string;
  updateProfile: (image: string, name: string) => void;
}

const useProfileStore = create<ProfileState>((set) => ({
  profileImage: "",
  fullName: "Jackson",
  updateProfile: (image: string) =>
    set(() => ({
      profileImage: image,
    })),
}));

export default useProfileStore;
