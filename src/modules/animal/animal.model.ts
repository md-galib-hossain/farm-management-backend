import { Schema, model } from "mongoose";
import { boolean } from "zod";
import { TAnimal, TAnimalModel } from "./animal.interface";

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
    isDeleted: {
        type: Boolean,
        default: false
    },
    
},
{
    timestamps: true
})

// filter out deleted documents
animalSchema.pre('find', function (next){
    this.find({isDeleted : {$ne : true}});
    next()
})
//checking if user is already exist!
animalSchema.statics.isAnimalExists = async function (id: string) {
    const existingAnimal = await AnimalModel.findById(id);
    return existingAnimal;
  };

export const AnimalModel = model<TAnimal, TAnimalModel> ('animal',animalSchema)