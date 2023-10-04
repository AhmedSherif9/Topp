"use client"
//import logo from './logo.svg';
import './App.css';
import Openpage from './openpage';
import Register from './register';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Openpage />}>
        </Route>

        <Route path="/hello" element={<Register />}>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
