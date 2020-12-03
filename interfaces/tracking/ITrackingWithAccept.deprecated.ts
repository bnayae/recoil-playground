import { ITrackingWithReset } from '.';

/**
 * Represent mutable change tracking state.
 * may represent atom state which can be mutate.
 */
export interface ITrackingWithAccept<T> extends ITrackingWithReset<T> {
  /**
   * accept the changes (in result origin = origin + changes)
   * this method will mutate the both origin & changes atoms.
   */
  accept: () => void;
}
