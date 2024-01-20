import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { AnimalService } from "./animal.service"

const getAllAnimals = ()=>{

}
const createAnimal = catchAsync(async (req,res)=>{
const animal = req.body
const result = await AnimalService.createAnimalToDb(animal)
sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Animal Created successfully',
    data: result,
  });

}) 


export const AnimalControllers = {getAllAnimals,createAnimal}