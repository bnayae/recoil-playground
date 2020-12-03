import { SetterOrUpdater } from 'recoil';

export interface ITrackingBase<T> {
  tracking: Partial<T>;
  isDirty: boolean;
  isDirtyKey: (key: keyof Partial<T>) => boolean;
  mutate: SetterOrUpdater<Partial<T>>;
}

export interface ITracking<T> {
  isLoading: boolean;
  error: Error | undefined;
  getOrigin: () => T;
  tracking: Partial<T>;
  isDirty: boolean;
  isDirtyKey: (key: keyof Partial<T>) => boolean;
  merge: () => T | undefined;
  mutate: SetterOrUpdater<Partial<T>>;
}
