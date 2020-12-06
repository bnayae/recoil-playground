import styled from 'styled-components';
import { TopRaw } from './TopRaw';

export const Top = styled(TopRaw)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(5rem, 15rem));
  grid-column-gap: 0.3rem;

  .selected {
    background: #533fff !important;
    color: #fdd !important;
    border-color: #333 !important;
  }

  .btn {
    padding: 1rem;
    margin: 0.3rem;
    border: solid;
    border-radius: 0.6rem;
    border-width: 0.1rem;
    border-color: #000;
    background: #333;
    color: #fff;
    cursor: pointer;
  }
`;
