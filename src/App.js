import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route excact path="/" element={<Home/>} />
      <Route excact path="/portfolio" element={<Portfolio/>} />
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
