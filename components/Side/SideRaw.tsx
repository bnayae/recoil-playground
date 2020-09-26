import React, { useState } from "react";
import { IWithClassName } from "../../interfaces/IWithClassName";

export const SideRaw = ({ className }: IWithClassName) => {
  const [page, setPage] = useState(1);
  return (
    <div className={className}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          onClick={() => setPage(i)}
          className={page === i ? "selected btn" : "btn"}
        >
          Page {i}
        </div>
      ))}
    </div>
  );
};
