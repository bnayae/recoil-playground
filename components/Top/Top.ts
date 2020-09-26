import styled from 'styled-components';
import { TopRaw } from './TopRaw';

export const Top = styled(TopRaw)`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 0.3rem;

  .selected {
    background: #a3d !important;
    color: #fdd !important;
    border-color: #733 !important;
  }

  .btn {
    padding: 1rem;
    margin: 0.3rem;
    border: solid;
    border-radius: 0.6rem;
    border-width: 0.1rem;
    border-color: #5520ee;
    background: #d9f;
    cursor: pointer;
  }
`;
