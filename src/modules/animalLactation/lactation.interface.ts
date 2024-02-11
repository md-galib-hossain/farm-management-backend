import { Types } from "mongoose"

export type TLactation = {
    animalSimpleId : string,
    lactationNo : number,
    animalId? :Types.ObjectId,
    date : string,
    totalMilk: number,

}
