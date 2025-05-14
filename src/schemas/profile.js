import { z } from "zod";
import {
  bioSchema,
  emailSchema,
  locationSchema,
  nameSchema,
  usernameSchema,
  websiteUrlSchema,
} from "../features/settings/forms/settings";

export const profileFormSchema = z.object({
  name: nameSchema,
  username: usernameSchema,
  email: emailSchema,
  websiteurl: websiteUrlSchema,
  location: locationSchema,
  bio: bioSchema,
});
