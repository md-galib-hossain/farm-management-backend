import { z } from "zod";


const createLactation = z.object({
    body: z.object({
        animalSimpleId : z.string().optional(),
        animalId : z.string(),
        lactationNo : z.number(),
        date : z.string(),
       totalMilk : z.number()

    })
})
const updateLactation = z.object({
    body: z.object({
        animalSimpleId : z.string().optional(),
        animalId : z.string().optional(),
        lactationNo : z.number().optional(),
        date : z.string().optional(),
       totalMilk : z.number().optional()

    })
})
export const lactationValidation = {createLactation,updateLactation }