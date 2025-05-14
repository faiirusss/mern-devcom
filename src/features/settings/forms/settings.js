import { z } from "zod";

export const nameSchema = z
  .string()
  .min(2, { message: "Username must be at least 2 characters." });
export const emailSchema = z
  .string({ message: "Email wajib diisi" })
  .email({ message: "Format email tidak tepat" });
export const usernameSchema = z
  .string()
  .min(2, { message: "Username must be at least 2 characters." });
export const websiteUrlSchema = z
  .string()
  .min(8, { message: "Username must be at least 8 characters." });
export const locationSchema = z
  .string()
  .min(8, { message: "Username must be at least 8 characters." });
export const bioSchema = z
  .string()
  .max(200, { message: "Username must be at least 8 characters." });
