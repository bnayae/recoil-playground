import React from 'react';
import { IWithClassName } from '../../../../interfaces';
import { ITrackingBase } from '../ITracking';

interface IProps<T extends object> extends ITrackingBase<T>, IWithClassName {
  name: keyof Partial<T>;
  origin: Partial<Record<keyof T, unknown>>;
  multi?: boolean;
}

export const TrackingInput = <T extends object>({
  name,
  origin,
  tracking,
  mutate,
  isDirtyKey,
  multi,
  className,
}: IProps<T>) => {
  // todo: move to the hook
  const isDirty = isDirtyKey(name) && origin[name] != tracking[name];
  // console.log(
  //   `## track [${name}]: ${JSON.stringify(tracking[name])} = ${JSON.stringify(
  //     tracking
  //   )}`
  // );
  // console.log(`## origin = track [${name}]: ${origin[name] == tracking[name]}`);

  const value = isDirty ? tracking[name] : origin[name];
  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    mutate((prev) => {
      const newValue = {
        ...prev,
        [name]: e.target.value,
      };
      return newValue;
    });

  return (
    <>
      <h4>
        {name} dirty = {JSON.stringify(isDirty)}
      </h4>
      {!multi && (
        <input
          className={className}
          type="text"
          value={value as string}
          onChange={handleChanges}
        />
      )}
      {multi && (
        <textarea
          className={className}
          value={value as string}
          onChange={handleChanges}
          rows={5}
          cols={5}
        />
      )}
    </>
  );
};
