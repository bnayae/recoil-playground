import React from 'react';
import {
  useRecoilTransactionObserver_UNSTABLE,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';
import { IWithClassName } from '../../../interfaces';
import { postObjectHierarchicSelector } from '../../../states/atoms/ObjectHierarchic';

interface IProps extends IWithClassName {
  // id: number;
}

export const ObserveByTransRaw = ({ className }: IProps) => {
  const setPost = useSetRecoilState(postObjectHierarchicSelector(10));
  const loadable = useRecoilValueLoadable(postObjectHierarchicSelector(10));

  useRecoilTransactionObserver_UNSTABLE(
    async ({ snapshot, previousSnapshot }) => {
      console.log(`${previousSnapshot.getID()} -> ${snapshot.getID()}`);

      // const userId = await snapshot.getPromise(postUserIdFiledAtom(10));
      // console.log(`## ${userId}`);
      const post = await snapshot.getPromise(postObjectHierarchicSelector(10));
      console.log(`# Current ${JSON.stringify(post)}`);
      // const prevPost = await previousSnapshot.getPromise(
      //   postObjectHierarchicSelector(10)
      // );
      // console.log(`# Prev ${JSON.stringify(prevPost)}`);

      // // return useless information
      // const { isActive, isSet, isModified, type } = snapshot.getInfo_UNSTABLE(
      //   postObjectHierarchicSelector(10)
      // );
      // console.log(
      //   `@ type=${type}, isSet=${isSet}, isModified=${isModified}, isActive=${isActive}`
      // );

      // iterate over the keys: {"key":"??"}[]
      // for (let item of snapshot.getNodes_UNSTABLE({ isModified })) {
      //   console.log(`# ${JSON.stringify(item)}`);
      // }
    }
  );

  if (loadable.state !== 'hasValue') <div>loading...</div>;
  const post = loadable.getValue();

  return (
    <div className={className}>
      ID: {post.userId}
      <button
        onClick={() =>
          setPost((p) => {
            return { ...p, userId: p.userId + 1 };
          })
        }
      >
        Change
      </button>
    </div>
  );
};
