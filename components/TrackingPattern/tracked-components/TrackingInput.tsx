import React from 'react';
import { IWithClassName } from '../../../interfaces';

interface IProps<T extends unknown> extends IWithClassName {
  name: keyof T;
  origin: Partial<Record<keyof T, unknown>>;
  changed?: Partial<Record<keyof T, unknown>>;
  mutator: (
    valOrUpdater: Partial<T> | ((currVal: Partial<T>) => Partial<T>)
  ) => void;
  multi?: boolean;
}

export const TrackingInput = <T extends unknown>({
  name,
  origin,
  changed,
  mutator,
  multi,
  className,
}: IProps<T>) => {
  const value = (changed && changed[name]) ?? origin[name];
  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    mutator((prev) => {
      const newValue = {
        ...prev,
        [name]: e.target.value,
      };
      return newValue;
    });

  return (
    <>
      <h4>{name}</h4>
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
