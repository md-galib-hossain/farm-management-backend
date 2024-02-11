import { Schema, model } from "mongoose";

const lactationSchema = new Schema({
    animalSimpleId : {
        type: String,
        required: true
    },
    lactationNo : {
        type: String,
        required: true
    },
    animalId : {
        type : Schema.Types.ObjectId,
        ref : 'animal',
       
    },
    date : {
        type: String,
        required : true
    },
    calf : {
        type: String,
        required : true
    }
},{
    timestamps: true
})

export const LactationModel = model('pregnancy',lactationSchema)