import { z } from "zod";

const CreateVaccineValidation = z.object({
    body: z.object({
        vaccineName : z.string(),
        maximumDose : z.number().optional(),
        vaccineTimeGap: z.string(),
        lastBuyPrice: z.number().optional()
    })
})

export const VaccineValidation = {CreateVaccineValidation}