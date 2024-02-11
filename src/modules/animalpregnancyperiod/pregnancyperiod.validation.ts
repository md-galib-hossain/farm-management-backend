import { z } from "zod";

const createPregnancy = z.object({
  body: z.object({
    animalSemenVariant: z.string(),
    semenGivenDate: z.string(),
    animalIsPregnant: z.boolean(),
    animalId: z.string().optional(),
    animalSimpleId: z.string(),
    predictedDeliveryDate: z.string(),
  }),
});
const updatePregnancy = z.object({
  body: z.object({
    animalSemenVariant: z.string().optional(),
    semenGivenDate: z.string().optional(),
    animalIsPregnant: z.boolean().optional(),
    animalId: z.string().optional(),
    animalSimpleId: z.string().optional(),
    predictedDeliveryDate: z.string().optional(),
  }),
});
export const pregnancyValidation = { createPregnancy, updatePregnancy };
