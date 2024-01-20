import { Model, Types } from "mongoose";


  type AnimalParent = {
    sire?: string;
    dam?: string;
  };
  
  type AnimalLactation = {
    count: number;
    date: Date;
    child: string;
  };
  
export type TAnimal = {
    animalCategory: Types.ObjectId;
    animalName?: string;
    animalImg?: string;
    animalSimpleId: string;
    animalWeight: string;
    animalBirthdate: Date;
    animalParents?: AnimalParent;
    animalVariant: string;
    animalLactation?: AnimalLactation[];
    animalAiState?: Date;
    animalIsPregnant?: boolean;
    animalSemenVariant?: string;
    isDeleted: boolean;
    animalDeliveryDate?: Date;
  };
  export interface TAnimalModel extends Model<TAnimal> {
    isAnimalExists(id: string): Promise<TAnimal | null>;
  }