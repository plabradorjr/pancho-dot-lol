import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./pages/Links";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route excact path="/" element={<Portfolio />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route excact path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
