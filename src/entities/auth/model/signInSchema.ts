import { z } from "zod";

import { signUpSchema } from "./signUpSchema";

export const signInSchema = signUpSchema.pick({ email: true, password: true });

export type SignInSchema = z.infer<typeof signInSchema>;
