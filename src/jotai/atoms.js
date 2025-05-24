import { atomWithStorage } from "jotai/utils";

export const tokenAtom = atomWithStorage("token", null);
export const emailStorageAtom = atomWithStorage("email", null);
export const usernameStorage = atomWithStorage("username", null);
export const createdAt = atomWithStorage("createdAt", null);
export const profilePicture = atomWithStorage("profile_picture", null);
