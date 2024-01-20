import { animalCategoryModel } from "./animalCategory.model";

const getAllAnimalCategoriesFromDb = async () => {
 
    const result = await animalCategoryModel.find();

return result 
};
export const animalCategoryService = {getAllAnimalCategoriesFromDb}
