import {  Types } from "mongoose"

export type TPregnancyPeriod = {
    animalSemenVariant : string;
    semenGivenDate : string;
    animalId? :Types.ObjectId;
    predictedDeliveryDate : string;
    pregnancyStatus : TPregnancyStatus;
    calf : Types.ObjectId;

}

export type TPregnancyStatus = 'conceived'|'running'|'success'|'failed'
    
