import { z } from "zod";

const AnimalLactationValidation = z.object({
    count: z.number(),
    date: z.string(),
    child: z.string()
  });
const createAnimalValidationSchema = z.object({
    body : z.object({
        animalCategory: z.string(),
        animalName: z.string(),
    
animalImg: z.string(),
animalSimpleId: z.string(),
animalWeight: z.string(),
animalBirthdate: z.string(),
animalParents: z.object({
    sire : z.string(),
    dam: z.string()
}).optional(),
animalVariant: z.string(),
animalLactation: z.array(AnimalLactationValidation).optional(),
animalAiState: z.string().optional(),
animalIsPregnant: z.boolean().optional(),
animalSemenVariant: z.string().optional(),
animalDeliveryDate: z.string().optional(),
isDeleted: z.boolean().optional()
    })
})
export const AnimalValidation = {createAnimalValidationSchema}