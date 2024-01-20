import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AnimalService } from "./animal.service";


// creating animals
const createAnimal = catchAsync(async (req, res) => {
    const animal = req.body;
    const result = await AnimalService.createAnimalToDb(animal);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Animal Created successfully",
      data: result,
    });
  });
  
//getting animals with query
const getAllAnimals = catchAsync(async (req, res) => {
  const result = await AnimalService.getAllAnimalsFromDb(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Animals retrieved successfully",
    data: result,
  });
});
// get single animal
const getSingleAnimal = catchAsync(async (req, res) => {
    const { id } = req.params;
    
    const result = await AnimalService.getSingleAnimalFromDB(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Animal is retrieved succesfully',
      data: result,
    });
  });
  const deleteSingleAnimal =catchAsync(async(req,res)=>{
const {id} = req.params
const result = await AnimalService.deleteSingleAnimalFromDB(id)
sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Animal is deleted succesfully',
    data: result,
  });
  })

export const AnimalControllers = { getAllAnimals, createAnimal,getSingleAnimal,deleteSingleAnimal };
