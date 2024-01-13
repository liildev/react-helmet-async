import "./App.css";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Vite SEO - Counter</title>
        <link
          rel="canonical"
          href="https://react-seo-demo-dunghd.vercel.app/"
        />
        <meta
          name="description"
          content="Simple Vite SEO Application for counter"
        />
      </Helmet>
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Vite SEO - Homepage</title>
        <link
          rel="canonical"
          href="https://react-seo-demo-dunghd.vercel.app/"
        />
        <meta name="description" content="Simple React SEO Application" />
      </Helmet>
      <h3>Simple Vite SEO Demo</h3>
      <header className="App-header">
        <Link to="/counter">Go to counter</Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
