import React, { useState } from 'react';
import { useRecoilStateLoadable, useResetRecoilState } from 'recoil';
import { IWithClassName } from '../../../interfaces';
import { postObjectHierarchicSelector } from '../../../states/atoms/ObjectHierarchic';
import {
  postBodyFiledAtom,
  postTitleFiledAtom,
} from '../../../states/atoms/ObjectHierarchic/PostFields';
import { AtomicInput } from './fields/AtomicInput';
import { guardObjectHierarchicLoad } from './interfaces';
import { useLoadableObjectHierarchicFamily } from './useLoadableObjectHierarchicFamily';

interface IProps extends IWithClassName {
  // id: number;
}

export const ObjectHierarchicRaw = ({ className }: IProps) => {
  const [targetId, setTargetId] = useState(1);
  const data = useLoadableObjectHierarchicFamily(
    postObjectHierarchicSelector,
    targetId
  );
  const reset = useResetRecoilState(postObjectHierarchicSelector(targetId));
  const [, setter] = useRecoilStateLoadable(
    postObjectHierarchicSelector(targetId)
  );

  // const init = async (id: number) => {
  //   const post = await postByIdProxy(id);
  //   setter(post);
  // };

  // useEffect(() => {
  //   init(targetId);
  // }, [targetId]);

  if (guardObjectHierarchicLoad(data)) {
    const { isLoading, error } = data;
    if (isLoading) return <>loading...</>;
    return <>Error: {error}</>;
  }
  // if (_.state === 'loading') return <div>loading...</div>;
  // if (_.state === 'hasError') return <div>error...</div>;

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
        <h3 className="title">Id: {data.id}</h3>
        <h3 className="title">User: {data.userId}</h3>
        <button className="btn" onClick={() => reset()}>
          RESET
        </button>
        <button
          className="btn"
          onClick={() =>
            setter((prev) => {
              return {
                id: targetId,
                userId: targetId,
                title: 'TESTING...',
                body: `BODY...${prev.body}`,
              };
            })
          }
        >
          TEST
        </button>
      </div>
      <AtomicInput
        atom={postTitleFiledAtom(targetId)}
        className="text"
        name="title"
      />
      <AtomicInput
        atom={postBodyFiledAtom(targetId)}
        className="text"
        name="body"
        multi
      />
      <h4>Data</h4>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};
