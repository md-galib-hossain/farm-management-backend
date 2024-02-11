import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { AnimalSearchableFields } from "./animal.constant";
import { TAnimal } from "./animal.interface";
import { AnimalModel } from "./animal.model";

const createAnimalToDb = async (animal: TAnimal) => {
  const animalExist = await AnimalModel.isAnimalExistsByCustomId(animal.animalSimpleId)

    const result = await AnimalModel.create(animal);
    return result;
  

};
const getAllAnimalsFromDb = async (query: Record<string, unknown>) => {
  const animalQuery = new QueryBuilder(
    AnimalModel.find().populate(["animalCategory","animalLactation"]),
    query
  )
    .search(AnimalSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await animalQuery.modelQuery;
  const meta = await animalQuery.countTotal();
  return {
    meta,
    result,
  };
};
// get single animal from db
const getSingleAnimalFromDB = async (id: string) => {
  const result = await AnimalModel.findById(id).populate("animalCategory");
  return result;
};

//delete single animal
const deleteSingleAnimalFromDB = async (id: string) => {
  const result = await AnimalModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

//update animal
const updateAnimalIntoDB = async (
  animalId: string,
  payload: Partial<TAnimal>
) => {
  const { animalParents, ...remainingAnimalData } = payload;
  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingAnimalData,
  };


  // Handling details, details is in object format
  if (animalParents && Object.keys(animalParents).length) {
    for (const [key, value] of Object.entries(animalParents)) {
      modifiedUpdatedData[`animalParents.${key}`] = value;
    }
  }

  // Handling animal lactation are in array format
  // if (animalLactation && animalLactation.length) {
  //   // Use $addToSet to avoid conflicts when updating arrays
  //   modifiedUpdatedData.$addToSet = { animalLactation: { $each: animalLactation } };
  // }
 


  // Remaining data which are primitive types
  for (const [key, value] of Object.entries(remainingAnimalData)) {
    modifiedUpdatedData[key] = value;
  }

  // modifiedUpdatedData.createdBy = _id

  // Update the course document in my database
  const result = await AnimalModel.findByIdAndUpdate(animalId, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  }
  );

  return result;
};

export const AnimalService = {
  createAnimalToDb,
  getAllAnimalsFromDb,
  getSingleAnimalFromDB,
  deleteSingleAnimalFromDB,
  updateAnimalIntoDB,
};
