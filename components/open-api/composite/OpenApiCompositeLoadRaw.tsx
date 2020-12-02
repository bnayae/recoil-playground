import React, { useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { IWithClassName } from '../../../interfaces';
import { postDetailByIdSelector } from '../../../states';

interface IProps extends IWithClassName {}

export const OpenApiCompositeLoadRaw = ({ className }: IProps) => {
  const [targetId, setTargetId] = useState(1);
  // useRecoilValue don't support SSR
  const loadable = useRecoilValueLoadable(postDetailByIdSelector(targetId));

  if (loadable.state === 'loading') return <>loading...</>;
  if (loadable.state === 'hasError') return <>Error: {loadable.contents}</>;

  const { user, id, title, body, comments } = loadable.contents;
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
        <h3 className="title">
          User: {user.name}, {user.email}
        </h3>
      </div>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>Comments:</h3>
      <ul>
        {comments.map((c) => (
          <li>{c.body}</li>
        ))}
      </ul>
    </div>
  );
};
