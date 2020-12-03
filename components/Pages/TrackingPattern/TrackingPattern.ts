import styled from 'styled-components';
import { TrackingPatternRaw } from './TrackingPatternRaw';

export const TrackingPattern = styled(TrackingPatternRaw)`
  display: grid;
  justify-items: left;
  padding: 3rem;

  .text {
    min-width: 30rem;
  }
`;
