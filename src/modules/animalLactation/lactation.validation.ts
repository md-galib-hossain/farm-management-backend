import { z } from "zod";

const createLactation = z.object({
  body: z.object({
    animalId: z.string(),
    lactationNo: z.number(),
    startedDate: z.string(),
    endedDate: z.string().optional(),
    totalMilk: z.number(),
    isActive: z.boolean(),
  }),
});
const updateLactation = z.object({
  body: z.object({
    animalId: z.string().optional(),
    lactationNo: z.number().optional(),
    startedDate: z.string().optional(),
    endedDate: z.string().optional(),
    totalMilk: z.number().optional(),
    isActive: z.boolean().optional(),
  }),
});
export const lactationValidation = { createLactation, updateLactation };
