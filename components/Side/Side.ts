import styled from "styled-components";
import { SideRaw } from "./SideRaw";

export const Side = styled(SideRaw)`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.3rem;
  .selected {
    background: #33d !important;
    color: #fdd !important;
    border-color: #333 !important;
  }

  .btn {
    padding: 1rem;
    margin: 0.3rem;
    border: solid;
    border-radius: 0.6rem;
    border-width: 0.1rem;
    border-color: #0000dd;
    background: #ddf;
    cursor: pointer;
  }
`;
