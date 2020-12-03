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
  // const [origin, setOrigin] = useState<T | undefined>(undefined);

  // benchmark (Performance): https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  const isEmpty = () => {
    // if (tracking == null) return true;

    // if (Array.isArray(tracking)) return tracking.length;

    for (const _ in tracking) {
      return false;
    }
    return true;
  };

  const isPropEmpty = (key: keyof Partial<T>) => {
    if (tracking[key] !== undefined) return true;

    // console.log(`## origin [${key}]: ${JSON.stringify(origin && origin[key])}`);
    // console.log(`## track [${key}]: ${JSON.stringify(tracking[key])}`);
    // console.log(`## track: ${JSON.stringify(tracking)}`);
    // if (tracking[key] === (origin && origin[key])) return true;
    // if (tracking[name] != (origin && origin[name])) return true;

    return false;
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
    // if (origin) return origin;
    if (loadable.state === 'hasValue') {
      const val = loadable.contents;
      // setOrigin(val);
      return val;
    }
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
