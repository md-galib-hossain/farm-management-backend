import { Schema, model } from "mongoose";
import { TVaccine, TVaccineModel } from "./vaccine.interface";

const VaccineSchema = new Schema({
    vaccineName : {
        type: String,
        required: true,
        unique:  true
    },
    maximumDose : {
        type: Number,
        required : false
    },
    vaccineTimeGap :{
        type: String,
    },lastBuyPrice :{
        type: Number,
        required : false
    }
})

//checking if user is already exist!
VaccineSchema.statics.isVaccineExists = async function (name: string) {
    const existingVaccine = await VaccineModel.findOne({vaccineName : name});
    return existingVaccine;
  };

export const VaccineModel = model<TVaccine, TVaccineModel>('vaccine', VaccineSchema)