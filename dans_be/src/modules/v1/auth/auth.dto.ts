import { z } from "zod";

export const register = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string(),
})

export const login = z.object({
	email: z.string(),
	password: z.string(),
})

export type Register = z.infer<typeof register>;
export type Login = z.infer<typeof register>;