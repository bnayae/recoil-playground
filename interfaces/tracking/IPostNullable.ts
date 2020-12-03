// export type IPostNullableRaw = NullableOptional<IPostRaw>;
// export type IPostNullable = NullableOptional<IPost>;

// credit: https://stackoverflow.com/questions/53276792/define-a-list-of-optional-keys-for-typescript-record
import { IPost } from '..';
export type IPostNullable = Partial<IPost>;

// export interface IPostNullableRaw {
//   //extends Record<keyof IPostNullable, unknown> {
//   userId?: number;
//   id: number;
//   title?: string;
//   body?: string;
// }

// export type IPostNullable = IPostNullableRaw &
//   Record<keyof IPostNullableRaw | keyof never, unknown | never>;
