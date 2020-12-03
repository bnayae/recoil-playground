import {
  RecoilState,
  RecoilValue,
  useRecoilState,
  useRecoilValueLoadable,
} from 'recoil';
import { ITracking } from '.';

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

  const isLoading = loadable.state === 'loading';
  const error = loadable.state === 'hasError' ? loadable.contents : undefined;

  if (loadable.state !== 'hasValue') {
    return {
      isLoading,
      error,
    };
  }

  // benchmark (Performance): https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  const isDirty = () => {
    // if (tracking == null) return true;

    // if (Array.isArray(tracking)) return tracking.length;

    for (const _ in tracking) {
      return false;
    }
    return true;
  };

  const origin = loadable.contents;

  const merge = (): T => {
    return { ...origin, ...tracking };
  };

  const isDirtyKey = (key: keyof Partial<T>) => {
    if (tracking[key] === undefined) return false;

    if (loadable.state === 'hasValue') {
      const val = loadable.contents;
      return val[key] != tracking[key];
    }
    return false; // not loaded yet or loaded with errors
  };

  const mutateField = (key: keyof T, value: unknown) =>
    mutate((prev) => {
      console.log(`## ${key}`);
      const newValue = {
        ...prev,
        [key]: value,
      };
      return newValue;
    });

  return {
    origin,
    tracking,
    merge,
    mutate,
    mutateField,
    isDirty: isDirty(),
    isDirtyKey,
  };
};
