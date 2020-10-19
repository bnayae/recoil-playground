import { atomFamily } from 'recoil';

export const stateFamilyPingPong = atomFamily({
  key: 'ping-pong',
  default: 1,
});
