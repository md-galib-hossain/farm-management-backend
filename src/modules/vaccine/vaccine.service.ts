import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TVaccine } from "./vaccine.interface"
import { VaccineModel } from "./vaccine.model"

const createVaccineIntoDb = async(vaccine : TVaccine)=>{
 
   const user = await VaccineModel.isVaccineExists(vaccine.vaccineName)
   if(!user){
       const result =await VaccineModel.create(vaccine)
       return result
}
throw new AppError(httpStatus.NOT_FOUND, 'This vaccine already stored in your system !');


}

export const vaccineService = {createVaccineIntoDb}