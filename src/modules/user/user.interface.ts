import { Model } from "mongoose";



export type TUser = {
    _id? : string,
    username : string;
    email: string;
    password : string;
    passwordChangedAt? : Date;
    role : 'user' | 'manager';
    isDeleted? : boolean
}


export interface TUserModel extends Model<TUser>{
    isUserexists(email:string) : Promise<TUser> | null
    isPasswordMatched(
        plainTextPassword: string,
        hashedPassword: string,
      ): Promise<boolean>;
      isJWTIssuedBeforePasswordChanged(
        passwordChangedTimestamp: Date,
        jwtIssuedTimestamp: number,
      ): boolean;
}