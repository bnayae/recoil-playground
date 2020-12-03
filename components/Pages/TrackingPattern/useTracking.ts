import {
  RecoilState,
  RecoilValue,
  useRecoilState,
  useRecoilValueLoadable,
} from 'recoil';
import { ITracking } from './ITracking';

/**
 * Abstract mutable component pattern
 * @param param0
 */
export const useTracking = <T extends object>(
  originValue: RecoilValue<T>,
  tracker: RecoilState<Partial<T>>
): ITracking<T> => {
  const loadable = useRecoilValueLoadable(originValue);
  const [tracking, mutate] = useRecoilState(tracker);

  // benchmark (Performance): https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  const isDirty = () => {
    // if (tracking == null) return true;

    // if (Array.isArray(tracking)) return tracking.length;

    for (const _ in tracking) {
      return false;
    }
    return true;
  };

  const merge = (): T | undefined => {
    if (loadable.state !== 'hasValue') return undefined;
    const origin: T = loadable.contents;
    // if (Array.isArray(origin)) return [...origin, ...tracking];
    return { ...origin, ...tracking };
  };

  const isLoading = loadable.state === 'loading';
  const error = loadable.state === 'hasError' ? loadable.contents : undefined;

  const getOrigin = () => {
    if (loadable.state === 'hasValue') {
      const val = loadable.contents;
      return val;
    }
    if (error) throw error;
    throw Error('Loading, origin cannot fetch before loading complete');
  };

  const isDirtyKey = (key: keyof Partial<T>) => {
    if (tracking[key] === undefined) return false;

    if (loadable.state === 'hasValue') {
      const val = loadable.contents;
      return val[key] != tracking[key];
    }
    return false; // not loaded yet or loaded with errors
  };

  return {
    isLoading,
    error,
    getOrigin,
    tracking,
    merge,
    mutate,
    isDirty: isDirty(),
    isDirtyKey,
  };
};
