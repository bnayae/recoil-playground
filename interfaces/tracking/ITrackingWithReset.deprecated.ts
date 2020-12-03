import { ITracking } from '.';

/**
 * Represent mutable change tracking state.
 * may represent atom state while can mutate the changes yet won't mutate the origin.
 */
export interface ITrackingWithReset<T> extends ITracking<T> {
  /**
   * reset the changes (in result changes = undefined)
   * this method will mutate the changes atom.
   */
  reset: () => void;
}
