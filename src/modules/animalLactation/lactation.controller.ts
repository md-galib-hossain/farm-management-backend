import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { lactationService } from "./lactation.service";

const createLactation = catchAsync(async(req,res)=>{

    const lactation = req.body
    console.log(lactation)
    const result = await lactationService.createLactationInDb(lactation)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Lactation Created successfully",
      data: result,
    });
  });

export const lactationController = { createLactation}