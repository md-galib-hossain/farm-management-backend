import { Types } from "mongoose"

export type TLactation = {
    lactationNo : number;
    animalId :Types.ObjectId;
    startedDate : string;
    endedDate? : string;
    isActive : boolean;
    totalMilk: number;

}
