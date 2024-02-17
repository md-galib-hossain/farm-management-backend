import { Schema, model } from "mongoose";
import { TLactation } from "./lactation.interface";

const lactationSchema = new Schema<TLactation>(
  {
    lactationNo: {
      type: Number,
      required: true,
    },
    animalId: {
      type: Schema.Types.ObjectId,
      ref: "animal",
    },
    startedDate: {
      type: String,
      required: true,
    },
    endedDate: {
      type: String,
    },
    totalMilk: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const LactationModel = model("lactation", lactationSchema);
