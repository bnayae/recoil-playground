import styled from 'styled-components';
import { TrackingPatternRaw } from './TrackingPatternRaw';

export const TrackingPattern = styled(TrackingPatternRaw)`
  display: grid;
  justify-items: left;

  .text {
    min-width: 30rem;
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
