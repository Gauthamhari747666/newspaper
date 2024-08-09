import logo from './logo.svg';
import './App.css';
import Add from './component/Add';
import View from './component/View';
import Search from './component/Search';
import Delete from './component/Delete';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add/>} />
       
        <Route path="/Search" element={<Search/>} />
        <Route path="/Delete" element={<Delete/>} />
        <Route path="/View" element={<View/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
