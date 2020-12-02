import { IUser } from '.';

export interface IPostDetails {
  user: IUser;
  id: number;
  title: string;
  body: string;
}
