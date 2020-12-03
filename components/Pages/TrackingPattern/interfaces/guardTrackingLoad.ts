import { ITracking } from '.';
import { ITrackingLoad } from './ITrackingLoad';

export const guardTrackingLoad = <T extends unknown>(
  candidate: ITracking<T>
): candidate is ITrackingLoad =>
  (candidate as any)?.isLoading || (candidate as any)?.error;
