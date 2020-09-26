import React from "react";
import { IWithClassName } from "../../interfaces/IWithClassName";

export const LayoutRaw = ({ className }: IWithClassName) => (
  <div className={className}>
    <div className="top"></div>
    <div className="side"></div>
    <div className="page"></div>
    <div className="right"></div>
    <div className="bottom"></div>
  </div>
);
