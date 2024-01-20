import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { animalCategoryService } from "./animalCategory.service"

const getAllAnimalCategories =catchAsync (async (req,res)=>{
    const result = await animalCategoryService.getAllAnimalCategoriesFromDb()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Animal Category retrieved successfully',
        data: result,
      });
})

export const animalCategoryController = {getAllAnimalCategories}