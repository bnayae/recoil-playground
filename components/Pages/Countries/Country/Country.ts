import styled from 'styled-components';
import { CountryRaw } from './CountryRaw';

export const Country = styled(CountryRaw)`
  border: 1px solid black;
  margin-bottom: 20px;

  img {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }
`;
