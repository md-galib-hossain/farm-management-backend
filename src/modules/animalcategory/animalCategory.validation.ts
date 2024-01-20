import { z } from "zod";
import { Gender } from "./animalCategory.constant";

const createAnimalCategoryValidation = z.object({
    body: z.object({
      
        animalGender : z.enum([...Gender] as [string, ...string[]]),
        animalType : z.string()

    })
})
export const animalCategoryValidation = {createAnimalCategoryValidation}