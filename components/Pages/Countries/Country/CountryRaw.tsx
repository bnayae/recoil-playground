import React from 'react';
import { Region } from '../Region/Region';
import { ICountryProps } from './ICountryProps';

export const CountryRaw = ({
  name,
  flag,
  className,
  region,
}: ICountryProps) => {
  return (
    <li className={className}>
      <span>{name}</span>
      <img src={flag} alt={name} />

      <Region id={name} regionName={region} />
    </li>
  );
};
