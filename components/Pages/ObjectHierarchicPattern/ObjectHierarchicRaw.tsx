import React, { useState } from 'react';
import { IWithClassName } from '../../../interfaces';
import { postComplexSelector } from '../../../states/atoms/ComplexTrackPattern';
import {
  postBodyFiledAtom,
  postTitleFiledAtom,
} from '../../../states/atoms/ComplexTrackPattern/PostFields';
import { AtomicInput } from './fields/AtomicInput';
import { guardObjectHierarchicLoad } from './interfaces';
import { useLoadableObjectHierarchicFamily } from './useLoadableObjectHierarchicFamily';

interface IProps extends IWithClassName {
  // id: number;
}

export const ObjectHierarchicRaw = ({ className }: IProps) => {
  const [targetId, setTargetId] = useState(1);
  const data = useLoadableObjectHierarchicFamily(postComplexSelector, targetId);

  if (guardObjectHierarchicLoad(data)) {
    const { isLoading, error } = data;
    if (isLoading) return <>loading...</>;
    return <>Error: {error}</>;
  }

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
