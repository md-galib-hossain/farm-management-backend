import express from 'express'
import { AnimalControllers } from './animal.controller'
import validateRequest from '../../middlewares/validateRequest'
import { AnimalValidation } from './animal.validation'
const router = express.Router()
router.get('/animals',AnimalControllers.getAllAnimals)
router.post('/animals',validateRequest(AnimalValidation.createAnimalValidationSchema),AnimalControllers.createAnimal)
export const AnimalRoutes = router