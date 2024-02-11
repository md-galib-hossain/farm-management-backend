import { Schema, model } from "mongoose";
import { boolean } from "zod";
import { TAnimal, TAnimalModel } from "./animal.interface";

const animalSchema = new Schema(
  {
    animalCategory: {
      type: Schema.Types.ObjectId,
      ref: "animalcategory",
      required: true,
    },
    animalName: {
      type: String,
      required: true,
    },
    animalImg: {
      type: String,
    },
    animalSimpleId: {
      type: String,
      required: true,
    },
    animalWeight: {
      type: String,
      required: true,
    },
    animalBirthdate: {
      type: String,
      required: true,
    },
    animalParents: {
      sire: {
        type: Schema.Types.ObjectId,
        ref: "animal",
      },
      dam: {
        type: Schema.Types.ObjectId,
        ref: "animal",
      },
    },
    animalVariant: {
      type: String,
    },
    animalLactation: [
      {
        type: Schema.Types.ObjectId,
        ref: "lactation",
        _id: false,
      },
    ],
    animalAiState: [
      {
        type: Schema.Types.ObjectId,
        ref: "pregnancy",
        _id: false,
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// filter out deleted documents
animalSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
//checking if animal is already exist!
animalSchema.statics.isAnimalExistsByCustomId = async function (id: string) {
  const existingAnimal = await AnimalModel.findOne({ animalSimpleId: id });
  return existingAnimal;
};
animalSchema.statics.isAnimalExists = async function (id: string) {
  const existingAnimal = await AnimalModel.findById({ _id: id });
  return existingAnimal;
};

export const AnimalModel = model<TAnimal, TAnimalModel>("animal", animalSchema);
