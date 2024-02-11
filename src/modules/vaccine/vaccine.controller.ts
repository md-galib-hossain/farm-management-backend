import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { vaccineService } from "./vaccine.service"

const createVaccine =catchAsync(async(req,res)=>{
const vaccine = req.body
const result = await vaccineService.createVaccineIntoDb(vaccine)
sendResponse(res,{
statusCode : httpStatus.OK,
success: true,
message: "Vaccine created successfully",
data: result
})
})
export const vaccineController = {createVaccine}