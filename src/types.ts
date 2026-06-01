import { Response, Request } from "express";
import { PublicUserType } from "models/User";
import { Types } from "mongoose";

export type JsonResponse<T> = Response<T>;
export type MessageResponse = { message: string };
export type MongoId = {
  _id: Types.ObjectId;
};

//problem de typage => on simplifie
export type CustomRequest = Request & {
  user?: PublicUserType;
};

export type CustomRequestWithQuery<T> = CustomRequest & { parsedQuery?: T };
