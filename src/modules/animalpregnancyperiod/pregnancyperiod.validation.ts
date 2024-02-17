import { z } from "zod";
import { pregnancyStatus } from "./pregnancyperiod.constant";



const createPregnancy = z.object({
  body: z.object({
    animalSemenVariant: z.string(),
    semenGivenDate: z.string(),
    animalId: z.string(),
    predictedDeliveryDate: z.string(),
    pregnancyStatus: z.enum([...pregnancyStatus] as [string, ...string[]]),
    calf:z.string()
  }),
});
const updatePregnancy = z.object({
  body: z.object({
    animalSemenVariant: z.string().optional(),
    semenGivenDate: z.string().optional(),
    animalId: z.string().optional(),
    predictedDeliveryDate: z.string().optional(),
    pregnancyStatus: z.enum([...pregnancyStatus] as [string, ...string[]]).optional(),
    calf:z.string().optional()
  }),
});
export const pregnancyValidation = { createPregnancy, updatePregnancy };
