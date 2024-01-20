import QueryBuilder from "../../builder/QueryBuilder";
import { AnimalSearchableFields } from "./animal.constant";
import { TAnimal } from "./animal.interface";
import { AnimalModel } from "./animal.model";

const createAnimalToDb = async (animal: TAnimal) => {
  const result = await AnimalModel.create(animal);
  return result;
};
const getAllAnimalsFromDb = async (query: Record<string, unknown>) => {
  const animalQuery = new QueryBuilder(
    AnimalModel.find().populate("animalCategory"),
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
        result
    }
};
// get single animal from db
const getSingleAnimalFromDB = async (id: string) => {
    const result = await AnimalModel.findById(id).populate(
      'animalCategory',
    );
    return result;
  };


export const AnimalService = { createAnimalToDb,getAllAnimalsFromDb,getSingleAnimalFromDB };
