import React from 'react';
import { ITrackingReady } from '..';
import { IWithClassName } from '../../../../interfaces';

interface IProps<T extends object> extends ITrackingReady<T>, IWithClassName {
  name: keyof Partial<T>;
  multi?: boolean;
}

export const TrackingInput = <T extends object>({
  name,
  origin,
  tracking,
  mutateField,
  isDirtyKey,
  multi,
  className,
}: IProps<T>) => {
  const isDirty = isDirtyKey(name);
  const rec = origin as Partial<Record<keyof T, unknown>>;
  const value = isDirty ? tracking[name] : rec[name];
  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => mutateField(name, e.target.value);

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
