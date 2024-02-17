import { Schema, model } from "mongoose";
import { pregnancyStatus } from "./pregnancyperiod.constant";
import { TPregnancyPeriod } from "./pregnancyperiod.interface";

const pregnancySchema = new Schema<TPregnancyPeriod>(
  {
    animalId: {
      type: Schema.Types.ObjectId,
      ref: "animal",
      required: true,
    },
    animalSemenVariant: {
      type: String,
      required: true,
    },
    semenGivenDate: {
      type: String,
      required: true,
    },
    predictedDeliveryDate: {
      type: String,
      required: true,
    },
    pregnancyStatus: {
      type: String,
      required: true,
      enum: pregnancyStatus,
    },
    calf: {
      type: Schema.Types.ObjectId,
      ref: "animal",
    },
  },
  {
    timestamps: true,
  }
);

export const PregnancyModel = model("pregnancy", pregnancySchema);
