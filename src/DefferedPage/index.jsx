import React, { useState, useTransition } from "react";
import useSWR from "swr";

const SUSPENSE_CONFIG = { timeoutMs: 3000 };

export default function DefferedPage() {
  const [pageDefIndex, setPageDefIndex] = useState(100);
  const { data } = useSWR(
    `https://randomuser.me/api/?page=${pageDefIndex}&results=10&seed=abc`
  );
  const [res, setRes] = useState(data);
  const [isPending, startTransition] = useTransition(SUSPENSE_CONFIG);
  const handlePreviousClick = () => {
    startTransition(() => {
      setPageDefIndex(pageDefIndex - 1);
      setRes(data);
    });
  };
  const handleNextClick = () => {
    startTransition(() => {
      setPageDefIndex(pageDefIndex + 1);
      setRes(data);
    });
  };
  return (
    <>
      {res.results.map((item, id) => (
        <div
          style={{ opacity: isPending ? 0.2 : 1 }}
          key={`${item.id.value}${id}`}
        >
          {item.name.first}
        </div>
      ))}
      <button
        style={{
          marginRight: "20px",
          backgroundColor: "green",
          color: "white",
        }}
        onClick={handlePreviousClick}
      >
        Previous
      </button>
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={handleNextClick}
      >
        Next
      </button>
    </>
  );
}
