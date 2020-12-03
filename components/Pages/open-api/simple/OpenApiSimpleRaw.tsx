import React, { useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { IWithClassName } from '../../../../interfaces';
import { postByIdSelector } from '../../../../states';

interface IProps extends IWithClassName {}

export const OpenApiSimpleRaw = ({ className }: IProps) => {
  const [targetId, setTargetId] = useState(1);
  // useRecoilValue don't support SSR
  const loadable = useRecoilValueLoadable(postByIdSelector(targetId));

  if (loadable.state === 'loading') return <>loading...</>;
  if (loadable.state === 'hasError') return <>Error: {loadable.contents}</>;

  const { userId, id, title, body } = loadable.contents;
  console.log(`${id} [${userId}]: ${title} `);

  return (
    <div className={className}>
      <p className="note">
        note: this sample use useRecoilValueLoadable because useRecoilValue
        don't support SSR
      </p>
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
        <h3 className="title">Id: {id}</h3>
        <h3 className="title">User: {userId}</h3>
      </div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
