import { TAnimalcategory } from "./animalCategory.interface";
import { animalCategoryModel } from "./animalCategory.model";


const createAnimalCategoryToDb =async (payload : TAnimalcategory)=>{
    const result = await animalCategoryModel.create(payload)
    return result
}
const getAllAnimalCategoriesFromDb = async () => {
 
    const result = await animalCategoryModel.find();

return result 
};


export const animalCategoryService = {getAllAnimalCategoriesFromDb,createAnimalCategoryToDb}
