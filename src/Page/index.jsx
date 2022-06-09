import React, { useState } from "react";
import useSWR from "swr";

export default function Page() {
  const [pageIndex, setPageIndex] = useState(0);
  const { data } = useSWR(
    `https://randomuser.me/api/?page=${pageIndex}&results=10&seed=abc`
  );

  return (
    <>
      {data.results.map((item, id) => (
        <div key={`${item.id.value}${id}`}>{item.name.first}</div>
      ))}
      <button
        style={{
          marginRight: "20px",
          backgroundColor: "green",
          color: "white",
        }}
        onClick={() => setPageIndex(pageIndex - 1)}
      >
        Previous
      </button>
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={() => setPageIndex(pageIndex + 1)}
      >
        Next
      </button>
    </>
  );
}
