import { z } from "zod";

export const getUser = z.object({
	user_id: z.number()
})

export const getUsers = z.object({
	user_id: z.number(),
	name: z.string(),
	limit: z.number(),
	offset: z.number(),
})