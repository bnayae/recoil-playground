import styled from 'styled-components';
import { LayoutRaw } from './LayoutRaw';

export const Layout = styled(LayoutRaw)`
  display: grid;
  grid-template-areas:
    '.   top  '
    'left   page  '
    'bottom bottom';
  align-items: stretch;
  justify-content: stretch;
  grid-template-rows: auto 1fr auto;
  /* height: 100vh; */

  grid-template-columns: 1fr 8fr;
  background: #eee;

  .top {
    grid-area: top;
  }
  .side {
    grid-area: left;
  }
  .page {
    grid-area: page;
    align-self: left;
    justify-self: left;
    margin: 5rem;
  }
  .bottom {
    grid-area: bottom;
    background: yellow;
  }
`;
