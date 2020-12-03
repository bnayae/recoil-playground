import { ITrackingLoad } from './ITrackingLoad';
import { ITrackingReady } from './ITrackingReady';

export type ITracking<T> = ITrackingReady<T> | ITrackingLoad;
