// credit: https://rbardini.com/making-optional-properties-nullable-typescript/

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K | never] } ? never : K;
}[keyof T];

type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K | never] } ? K : never;
}[keyof T];

type PickRequired<T> = Pick<T, RequiredKeys<T>>;

type PickOptional<T> = Pick<T, OptionalKeys<T>>;

type Nullable<T> = { [P in keyof T]: T[P] | null };

export type NullableOptional<T> = PickRequired<T> & Nullable<PickOptional<T>>;

export type PartialRecord<K extends keyof T | keyof never, T> = {
  [P in K]?: T;
};
