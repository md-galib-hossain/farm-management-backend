import express from "express"
import { animalCategoryController } from "./animalCategory.controller"
const router = express.Router()

router.get('/animalcategories',animalCategoryController.getAllAnimalCategories)

export const animalCategoryRoutes = router