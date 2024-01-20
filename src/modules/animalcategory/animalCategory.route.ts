import express from "express"
import { animalCategoryController } from "./animalCategory.controller"
import { animalCategoryValidation } from "./animalCategory.validation"
import validateRequest from "../../middlewares/validateRequest"
const router = express.Router()

router.get('/animalcategories',animalCategoryController.getAllAnimalCategories)
router.post('/animalcategories',validateRequest(animalCategoryValidation.createAnimalCategoryValidation),animalCategoryController.createAnimalCategory)

export const animalCategoryRoutes = router