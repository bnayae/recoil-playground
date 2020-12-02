import { IUser } from '.';
import { IPostComment } from './IPostComment';

export interface IPostDetails {
  user: IUser;
  comments: IPostComment[];
  id: number;
  title: string;
  body: string;
}
