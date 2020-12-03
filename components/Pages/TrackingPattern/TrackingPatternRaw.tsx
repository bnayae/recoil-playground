import React, { useState } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { IPostNullable, IWithClassName } from '../../../interfaces';
import { postAtom, postTrackingAtom } from '../../../states';
import { TrackingInput } from './tracked-components/TrackingInput';

interface IProps extends IWithClassName {
  // id: number;
}

// todo: button, submit
// todo: other fields
// todo: validation (isDirty) with Yup

export const TrackingPatternRaw = ({ className }: IProps) => {
  const [targetId, setTargetId] = useState(1);
  // const loadable = useRecoilValueLoadable(postTrackingSelector(id));
  const loadable = useRecoilValueLoadable(postAtom(targetId));
  const [changed, mutator] = useRecoilState(postTrackingAtom(targetId));

  if (loadable.state === 'loading') return <>loading...</>;
  if (loadable.state === 'hasError') return <>Error: {loadable.contents}</>;

  const origin = loadable.contents;
  console.log(JSON.stringify(`# ${origin}`));

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
      </div>
      <TrackingInput<IPostNullable>
        className="text"
        name="title"
        origin={origin}
        changed={changed}
        mutator={mutator}
      />
      <TrackingInput<IPostNullable>
        className="text"
        name="body"
        origin={origin}
        changed={changed}
        mutator={mutator}
        multi
      />
      <h4>Origin</h4>
      <p>{JSON.stringify(origin)}</p>
      <h4>Changed</h4>
      <p>{JSON.stringify(changed)}</p>
    </div>
  );
};
