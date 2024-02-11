import { Types } from "mongoose"

export type TPregnancyPeriod = {
    animalSemenVariant : string
    semenGivenDate : string,
    animalIsPregnant : boolean,
    animalId? :Types.ObjectId,
    animalSimpleId :string,
    predictedDeliveryDate : string

}
