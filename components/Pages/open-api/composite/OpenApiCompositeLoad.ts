import styled from 'styled-components';
import { OpenApiCompositeLoadRaw } from './OpenApiCompositeLoadRaw';

export const OpenApiCompositeLoad = styled(OpenApiCompositeLoadRaw)`
  display: grid;
  justify-items: left;
  padding: 3rem;
  justify-self: left;

  .note {
    color: #77777788;
  }
  .header {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-column-gap: 1rem;
    align-items: center;
    & .btn {
      height: 2rem;
    }
    & .title {
      color: #777;
    }
  }
`;
