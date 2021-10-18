import { ICategory } from "./ICategory";
import { IContent } from "./IContent";
import { IEntity } from "./IEntity";
import { IUser } from "./IUser";
import { IWatchList } from "./IWatchList";

export interface ICourse extends IEntity {
  id: number;
  title: string;
  subDescription: string;
  description: string;
  price: number;
  discount: number;
  avatarPath: string;
  coverPath: string;
  totalEnrollment: number;
  avgStar: number;
  totalReview: number;
  totalView: number;
  creatorId: number;
  categoryId: number;
  isWatchList: boolean;
  isEnrollment: boolean;
  complete: boolean;
  category: ICategory;
  creator: IUser;
  contents: IContent[];
  watchLists: IWatchList[];
}