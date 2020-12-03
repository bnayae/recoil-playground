/**
 * Represent immutable change tracking state.
 * may represent atom state but won't mutate it.
 */
export interface ITracking<T> {
  /**
   * represent the merged state
   */
  readonly state: T;
  /**
   * represent the initial data
   */
  readonly origin: T;
  /**
   * Represent the data changes
   */
  readonly tracking?: T;

  /**
   * indicate whether has changes
   */
  readonly isDirty: boolean;
}
