import { Schema, model } from "mongoose";

const animalSchema = new Schema({
    
    animalCategory: {
        type : Schema.Types.ObjectId,
        ref : 'animalcategory',
        required: true
    },
    animalName: {
        type: String,
        required: true
    },
    animalImg: {
        type: String,
        required: false
    },
    animalSimpleId: {
        type: String,
        required : true,
        unique : true
    },
    animalWeight: {
        type: String,
        required: true
    },
    animalBirthdate: {
        type: String,
        required: true
    },
    animalParents: {
        sire: {
            type: String,
            required: false
        },
        dam: {
            type: String,
            required: false
        }
    },
    animalVariant: {
        type: String,
        required: false
    },
    animalLactation: [
        {
            count: {
                type: Number,
                required: false
            },
            date: {
                type: String,
                required: false
            },
            child: {
                type: String,
                required: false
            }
        }
    ],
    animalAiState: {
        type: String,
        required: false
    },
    animalIsPregnant: {
        type: Boolean,
        required: false
    },
    animalSemenVariant: {
        type: String,
        required: false
    },
    animalDeliveryDate: {
        type: String,
        required: false
    },
})
export const AnimalModel = model ('animal',animalSchema)