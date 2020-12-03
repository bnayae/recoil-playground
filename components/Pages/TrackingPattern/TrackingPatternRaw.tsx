import React, { useState } from 'react';
import { IPost, IWithClassName } from '../../../interfaces';
import { postAtom, postTrackingAtom } from '../../../states';
import { TrackingInput } from './tracked-components/TrackingInput';
import { useTracking } from './useTracking';

interface IProps extends IWithClassName {
  // id: number;
}

// todo: button, submit
// todo: other fields
// todo: validation (isDirty) with Yup

export const TrackingPatternRaw = ({ className }: IProps) => {
  const [targetId, setTargetId] = useState(1);
  const originRecoil = postAtom(targetId);
  // const loadable = useRecoilValueLoadable(postAtom(targetId));
  const trackingRecoil = postTrackingAtom(targetId);
  // const [changed, mutator] = useRecoilState(postTrackingAtom(targetId));
  const { isLoading, error, getOrigin, tracking, merge, mutate } = useTracking(
    originRecoil,
    trackingRecoil
  );

  if (isLoading) return <>loading...</>;
  if (error) return <>Error: {error}</>;

  const origin: IPost = getOrigin();

  return (
    <div className={className}>
      <div className="header">
        <button className="btn" onClick={() => setTargetId((prev) => prev + 1)}>
          Up ↑
        </button>
        <button
          className="btn"
          onClick={() => setTargetId((prev) => prev - 1)}
          disabled={targetId <= 1}
        >
          Down ↓
        </button>
        <h3 className="title">Id: {origin.id}</h3>
        <h3 className="title">User: {origin.userId}</h3>
      </div>
      <TrackingInput<IPost>
        className="text"
        name="title"
        origin={origin}
        changed={tracking}
        mutator={mutate}
      />
      <TrackingInput<IPost>
        className="text"
        name="body"
        origin={origin}
        changed={tracking}
        mutator={mutate}
        multi
      />
      <h4>Origin</h4>
      <p>{JSON.stringify(origin)}</p>
      <h4>Changed</h4>
      <p>{JSON.stringify(tracking)}</p>
      <h4>Merged</h4>
      <p>{JSON.stringify(merge())}</p>
    </div>
  );
};
