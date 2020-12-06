import styled from 'styled-components';
import { SideRaw } from './SideRaw';

export const Side = styled(SideRaw)`
  display: grid;
  /* grid-template-columns: 1fr; */
  /* grid-template-rows: repeat(auto-fill, minMax(5rem, 1fr)); */
  /* grid-auto-flow: row; */
  grid-row-gap: 0.1rem;
  .selected {
    background: #533fff !important;
    color: #fdd !important;
    border-color: #333 !important;
  }

  .btn {
    white-space: nowrap;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 9rem;
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
