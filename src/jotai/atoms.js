import { atomWithStorage } from "jotai/utils";

export const tokenAtom = atomWithStorage("token", null)
export const emailStorageAtom =  atomWithStorage("email", null)