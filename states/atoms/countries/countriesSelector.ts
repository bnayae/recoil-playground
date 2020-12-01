import { selector } from 'recoil';
import { IResponseData } from './../../../interfaces/countries/IResponseData';
import { ICountry } from './contracts/ICountry';

export const countriesSelector = selector<IResponseData[]>({
  key: 'list-of-countries',
  get: async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data: ICountry[] = await response.json();

    return data;
  },
});
