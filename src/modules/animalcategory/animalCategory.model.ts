import { Schema, model } from "mongoose";

const animalCategorySchema = new Schema({
   
            animalGender : {
                type : String,
                enum : ["male", "female"],
                required : true
            },
            animalType : {
                type : String,
             
            }
      
})

export const animalCategoryModel = model('animalcategory', animalCategorySchema)