import styled from 'styled-components';
import { LayoutRaw } from './LayoutRaw';

export const Layout = styled(LayoutRaw)`
  display: grid;
  grid-template-areas:
    'info    top     top'
    'left   page    right'
    'bottom bottom  bottom';
  align-items: stretch;
  justify-content: stretch;

  grid-template-columns: 1fr 8fr 1fr;
  background: #eee;

  .info {
    grid-area: info;
  }
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
  .right {
    grid-area: right;
    background: orange;
  }
  .bottom {
    grid-area: bottom;
    background: yellow;
  }
`;
