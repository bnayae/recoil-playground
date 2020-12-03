import React from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { IPostNullable, IWithClassName } from '../../interfaces';
import { postAtom, postTrackingAtom } from '../../states';
import { TrackingInput } from './tracked-components/TrackingInput';

interface IProps extends IWithClassName {
  id: number;
}

// todo: button, submit
// todo: other fields
// todo: validation (isDirty) with Yup

export const TrackingPatternRaw = ({ id, className }: IProps) => {
  // const loadable = useRecoilValueLoadable(postTrackingSelector(id));
  const loadable = useRecoilValueLoadable(postAtom(id));
  const [changed, mutator] = useRecoilState(postTrackingAtom(id));

  if (loadable.state === 'loading') return <>loading...</>;
  if (loadable.state === 'hasError') return <>Error: {loadable.contents}</>;

  const origin = loadable.contents;
  console.log(JSON.stringify(`# ${origin}`));

  return (
    <div className={className}>
      <input
        className="text"
        type="text"
        value={changed?.title ?? origin.title}
        onChange={(e) =>
          mutator((prev) => {
            const newValue: IPostNullable = {
              ...prev,
              id,
              title: e.target.value,
            };
            return newValue;
          })
        }
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
