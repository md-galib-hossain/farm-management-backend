import { Schema, model } from "mongoose";

const lactationSchema = new Schema({
    animalSimpleId : {
        type: String,
        required: true
    },
    lactationNo : {
        type: Number,
        required: true
    },
    animalId : {
        type : Schema.Types.ObjectId,
        ref : 'animal',
       
    },
    date : {
        type: Date,
        required : true
    },
    totalMilk: {
        type : Number,
        required : true
    }

},{
    timestamps: true
})

export const LactationModel = model('lactation',lactationSchema)