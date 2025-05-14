import { z } from "zod";

export const nameSchema = z.string().optional();
export const emailSchema = z
  .string({ message: "Email wajib diisi" })
  .email({ message: "Format email tidak tepat" });
export const usernameSchema = z
  .string()
  .min(2, { message: "Username must be at least 2 characters." });
export const websiteUrlSchema = z.string().optional();
export const locationSchema = z.string().optional();
export const bioSchema = z.string().optional();
