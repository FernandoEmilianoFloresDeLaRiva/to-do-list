import z from "zod";

const taskSchema = z.object({
  nameTask: z.string({
    invalid_type_error: "Task name must be a string",
    required_error: "Task name is required",
  }),
  date: z.coerce.date().nullable().default(null),
});

export const validateTask = (object) => {
  return taskSchema.safeParse(object);
};

export const validatePartialTask = (object) => {
  return taskSchema.partial().safeParse(object);
};
