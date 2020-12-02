import { selectorFamily } from 'recoil';
import { IResponseData } from './../../../interfaces/countries/IResponseData';

export const regionFamilySelector = selectorFamily<IResponseData[], string>({
  key: 'regionFamilySelector',
  get: (regionName) => async () => {
    if (!regionName) return;

    const response = await fetch(
      `https://restcountries.eu/rest/v2/region/${regionName}`
    );

    const regionData = await response.json();

    return regionData;
  },
});

// export const regionSelector = selectorFamily({
//   key: 'regionSelector',
//   get: (regionId) => ({ get }) =>
//     get(regionFamilySelector(get(stateFamilyRegion(regionId)))),
// });
