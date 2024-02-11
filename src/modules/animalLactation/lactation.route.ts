import express from "express"
import validateRequest from "../../middlewares/validateRequest"
import { lactationValidation } from "./lactation.validation"
import { lactationController } from "./lactation.controller"
const router = express.Router()

router.get('/lactations')
router.post('/lactation',validateRequest(lactationValidation.createLactation),lactationController.createLactation)

export const lactationRoutes = router