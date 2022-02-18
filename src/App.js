import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route excact path="/" element={<Home/>} />
      <Route excact path="/portfolio" element={<Portfolio/>} />
      <Route exact path="/resume" element={<Resume/>}/>
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
