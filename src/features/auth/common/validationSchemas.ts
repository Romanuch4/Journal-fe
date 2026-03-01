import z from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export const signUpSchema = loginSchema.extend({
  name: z.string().min(2).max(24),
});
