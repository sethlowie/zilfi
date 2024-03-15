import { z } from "zod";

export const Task = z.object({
  id: z.string(),
  title: z.string(),
  completed: z.boolean(),
});

export type Task = z.infer<typeof Task>;
