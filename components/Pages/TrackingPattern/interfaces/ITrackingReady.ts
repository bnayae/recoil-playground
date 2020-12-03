import { SetterOrUpdater } from 'recoil';

export interface ITrackingReady<T> {
  origin: T;
  tracking: Partial<T>;
  isDirty: boolean;
  isDirtyKey: (key: keyof Partial<T>) => boolean;
  mutate: SetterOrUpdater<Partial<T>>;
  mutateField: (key: keyof T, value: unknown) => void;
  merge: () => T;
}
