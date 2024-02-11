import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { VaccineValidation } from "./vaccine.validation";
import { vaccineController } from "./vaccine.controller";
const router = express.Router();

router.post(
  "/vaccine",
  validateRequest(VaccineValidation.CreateVaccineValidation),
  vaccineController.createVaccine
);
export const vaccineRoutes = router
