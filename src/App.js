import React, { Suspense } from "react";
import "./App.css";
import Page from "./Page";
import DefferedPage from "./DefferedPage";

function App() {
  return (
    <div className="App">
      <p>My Suspense App</p>
      <Suspense fallback={<p>loading...</p>}>
        <Page />
      </Suspense>
      <Suspense fallback={<p>defLoading...</p>}>
        <DefferedPage />
      </Suspense>
    </div>
  );
}

export default App;
