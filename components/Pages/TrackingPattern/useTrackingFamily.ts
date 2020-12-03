import { RecoilState } from 'recoil';
import { ITracking } from '.';
import { useTracking } from './useTracking';

export const useTrackingFamily = <T extends object, TParam extends unknown>(
  origin: (param: TParam) => RecoilState<T>,
  tracker: (param: TParam) => RecoilState<Partial<T>>,
  param: TParam
): ITracking<T> => useTracking(origin(param), tracker(param));
