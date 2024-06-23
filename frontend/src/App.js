import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Tours from './components/Tours';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
