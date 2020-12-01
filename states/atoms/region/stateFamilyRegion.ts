import { atomFamily } from 'recoil';

export const stateFamilyRegion = atomFamily({
  key: 'region',
  default: '',
});
