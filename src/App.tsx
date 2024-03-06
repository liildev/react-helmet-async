import "./App.css";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import MetaInfo from "./seo";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MetaInfo title="Counter" description="Counter description" />
      <h3>Simple Vite SEO Demo - Counter page</h3>
      <header className="App-header">
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>Simple counter</p>
        <Link to="/">Back to homepage</Link>
      </header>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <MetaInfo />

      <h3>Simple Vite SEO Demo</h3>
      <header className="App-header">
        <Link to="/counter">Go to counter</Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="counter" element={<Counter />} />
    </Routes>
  );
}

export default App;
