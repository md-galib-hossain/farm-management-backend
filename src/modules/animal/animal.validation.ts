import { z } from "zod";

const AnimalParentValidation = z.object({
  sire: z.string().optional(),
  dam: z.string().optional()
});




const  createAnimalValidationSchema = z.object({
    body: z.object({
      animalCategory: z.string(),
      animalName: z.string(),
      animalImg: z.string().optional(),
      animalSimpleId: z.string(),
      animalWeight: z.string(),
      animalBirthdate: z.string(),
      animalParents: AnimalParentValidation.optional(),
      animalVariant: z.string().optional(),
      animalLactation: z.array(z.string()).optional(),
      animalAiState: z.array(z.string()).optional(),
      isDeleted: z.boolean()
    })
  })



const updateAnimalValidationSchema = z.object({
    body: z.object({
      animalCategory: z.string().optional(),
      animalName: z.string().optional(),
      animalImg: z.string().optional(),
      animalSimpleId: z.string().optional(),
      animalWeight: z.string().optional(),
      animalBirthdate: z.string().optional(),
      animalParents: AnimalParentValidation.optional(),
      animalVariant: z.string().optional(),
      animalLactation: z.array(z.string()).optional(),
      animalAiState: z.array(z.string()).optional(),
      isDeleted: z.boolean().optional()
    })
  })

  export const AnimalValidation = {createAnimalValidationSchema,updateAnimalValidationSchema}