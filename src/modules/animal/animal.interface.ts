import { Model, Types } from "mongoose";



export type TAnimal = {
  animalCategory: Types.ObjectId;
  animalName: string;
  animalImg?: string;
  animalSimpleId: string;
  animalWeight: string;
  animalBirthdate: string;
  animalParents?: {
    sire?: string;
    dam?: string;
  };
  animalVariant?: string;
  animalLactation?: Types.ObjectId[];
  animalAiState?:  Types.ObjectId [];
  isDeleted: boolean;
};
export interface TAnimalModel extends Model<TAnimal> {
  isAnimalExists(id: string): Promise<TAnimal | null>;
  isAnimalExistsByCustomId(id: string): Promise<TAnimal | null>;
}
