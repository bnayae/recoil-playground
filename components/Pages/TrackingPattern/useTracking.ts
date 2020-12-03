import {
  RecoilState,
  RecoilValue,
  SetterOrUpdater,
  useRecoilState,
  useRecoilValueLoadable,
} from 'recoil';

interface ITracking<T> {
  isLoading: boolean;
  error: Error | undefined;
  getOrigin: () => T;
  tracking: Partial<T>;
  isDirty: boolean;
  isDirtyKey: (key: keyof Partial<T>) => boolean;
  merge: () => T | undefined;
  mutate: SetterOrUpdater<Partial<T>>;
}

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
  const isEmpty = () => {
    // if (tracking == null) return true;

    // if (Array.isArray(tracking)) return tracking.length;

    for (const _ in tracking) {
      return false;
    }
    return true;
  };

  const isPropEmpty = (key: keyof Partial<T>) => tracking[key] !== undefined;

  const merge = (): T | undefined => {
    if (loadable.state !== 'hasValue') return undefined;
    const origin: T = loadable.contents;
    // if (Array.isArray(origin)) return [...origin, ...tracking];
    return { ...origin, ...tracking };
  };

  const isLoading = loadable.state === 'loading';
  const error = loadable.state === 'hasError' ? loadable.contents : undefined;

  const getOrigin = () => {
    if (loadable.state === 'hasValue') return loadable.contents;
    if (error) throw error;
    throw Error('Loading, origin cannot fetch before loading complete');
  };

  return {
    isLoading,
    error,
    getOrigin,
    tracking,
    merge,
    mutate,
    isDirty: isEmpty(),
    isDirtyKey: isPropEmpty,
  };
};
