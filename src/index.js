import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SWRConfig } from "swr";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (...args) => {
          return fetch(...args).then((res) => res.json());
        },
        suspense: true,
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>
);
