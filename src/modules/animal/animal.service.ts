import { TAnimal } from "./animal.interface"
import { AnimalModel } from "./animal.model"

const createAnimalToDb =async (animal : TAnimal)=>{

    const result = await AnimalModel.create(animal)
    return result
}
export const AnimalService = {createAnimalToDb}