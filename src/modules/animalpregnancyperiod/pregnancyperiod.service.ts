import { TLactation } from "./pregnancyperiod.interface"
import { LactationModel } from "./pregnancyperiod.model"

const createLactationInDb = async(lactation : TLactation) =>{
const result =await LactationModel.create(lactation)
return result
}

const getAllLactationsFromDb =async ()=>{
    const result =await LactationModel.find()
    return result
}

const getSingleLactationFromDb = async()

export const lactationService = {createLactationInDb,getAllLactationsFromDb}