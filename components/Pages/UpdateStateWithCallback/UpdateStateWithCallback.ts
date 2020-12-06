import styled from 'styled-components';
import { UpdateStateWithCallbackRaw } from './UpdateStateWithCallbackRaw';

export const UpdateStateWithCallback = styled(UpdateStateWithCallbackRaw)`
  display: grid;
  justify-items: left;

  .text {
    min-width: 30rem;
  }
  .header {
    display: grid;
    grid-template-columns: repeat(8, auto);
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
