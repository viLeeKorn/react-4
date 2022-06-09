import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SWRConfig } from "swr";
import { ErrorBoundary } from "./ErrorBoundaryProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h2 className="App">Could not fetch posts.</h2>}>
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
    </ErrorBoundary>
  </React.StrictMode>
);
