import styled from 'styled-components';
import { PingPongBoardRaw } from './PingPongBoardRaw';

export const PingPongBoard = styled(PingPongBoardRaw)`
  display: grid;
  justify-items: space-around;
  grid-template-areas: 'left right';
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-column-gap: 8rem;
  color: #eee;

  .left {
    grid-area: left;
    background: #632;
  }
  .right {
    grid-area: right;
    background: #236;
  }
`;
