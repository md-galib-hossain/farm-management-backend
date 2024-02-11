import { Model } from "mongoose";

export type TVaccine = {
vaccineName : string,
maximumDose : number,
vaccineTimeGap : string,
lastBuyPrice? : number
}
export interface TVaccineModel extends Model<TVaccine> {
    isVaccineExists(name: string): Promise<TVaccine | null>;
  }