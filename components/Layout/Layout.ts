import styled from 'styled-components';
import { LayoutRaw } from './LayoutRaw';

export const Layout = styled(LayoutRaw)`
  display: grid;
  grid-template-areas:
    'top    top     top'
    'left   page    right'
    'bottom bottom  bottom';
  align-items: stretch;
  justify-content: stretch;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: 4rem calc(100vh - 6rem) 2rem;
  background: #eee;

  .top {
    grid-area: top;
  }
  .side {
    grid-area: left;
  }
  .page {
    grid-area: page;
    background: green;
  }
  .right {
    grid-area: right;
    background: orange;
  }
  .bottom {
    grid-area: bottom;
    background: yellow;
  }
`;
