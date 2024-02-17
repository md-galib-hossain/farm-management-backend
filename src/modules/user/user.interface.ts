import { Model } from "mongoose";



export type TUser = {
    _id? : string,
    userName : string;
    email: string;
    password : string;
    passwordChangedAt? : Date;
    role : 'user' | 'admin' | 'superAdmin';
    status: 'in-progress' | 'blocked';
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