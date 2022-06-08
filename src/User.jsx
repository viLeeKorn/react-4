import React from "react";
import useSWR from "swr";

export default function User() {
  let { data } = useSWR("https://randomuser.me/api/");

  return (
    <div>
      <p>{data.results[0].email}</p>
    </div>
  );
}
