import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { IWithClassName } from '../../interfaces';
import { countriesSelector } from '../../states/atoms/countries/countriesSelector';
import { Country } from './Country/Country';

interface IProps extends IWithClassName {}

export const CountriesRaw = ({ className }: IProps) => {
  const { state, contents } = useRecoilValueLoadable(countriesSelector);

  if (state === 'loading') return <>...Loading</>;

  return (
    <div className={className}>
      {state === 'hasValue' && (
        <ul>
          {Array.isArray(contents) &&
            contents.map((el) => <Country key={el.name} {...el} />)}
        </ul>
      )}
    </div>
  );
};
