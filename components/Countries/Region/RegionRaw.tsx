import React, { useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { regionFamilySelector } from '../../../states/atoms/region';
import { IRegionProps } from './IRegion';

export const RegionRaw = ({ regionName }: IRegionProps) => {
  const [region, setRegion] = useState('');
  // const setRegion = useSetRecoilState(stateFamilyRegion(id));
  const { contents, state } = useRecoilValueLoadable(
    regionFamilySelector(region)
  );

  return (
    <ul>
      <li onClick={() => setRegion(regionName)}>
        {regionName}
        <ul>
          {state === 'hasValue' &&
            Array.isArray(contents) &&
            contents.map((el) => <li>{el.name}</li>)}
        </ul>
      </li>
    </ul>
  );
};
