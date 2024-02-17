import { Types } from "mongoose";

export type TLoginUser = {
  email: string;
  password: string;
};
export type TjwtPayload = {
  userName : string;
  email: string;
  password? : string;
  role : 'user' | 'admin' | 'superAdmin';
  status: 'in-progress' | 'blocked';
  userId : string;
 
}