import { Suspense } from "react";
import "./App.css";
import User from "./User";

function App() {
  return (
    <div className="App">
      <p>My Suspense App</p>
      <Suspense fallback={<p>loading...</p>}>
        <User />
      </Suspense>
    </div>
  );
}

export default App;
