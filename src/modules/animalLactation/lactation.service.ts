import { TLactation } from "./lactation.interface"
import { LactationModel } from "./lactation.model"

const createLactationInDb = async(lactation : TLactation) =>{
const result =await LactationModel.create(lactation)
return result
}

const getAllLactationsFromDb =async ()=>{
    const result =await LactationModel.find()
    return result
}


export const lactationService = {createLactationInDb,getAllLactationsFromDb}