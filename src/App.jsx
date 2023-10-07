"use client"
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Openpage from './openpage';
import Openpage2 from './openpage2';
import Register from './register';
import Registerr from './register2';
import Adminhome from './Adminhome';
import Pharmacisthome from './Pharmacisthome';
import Patienthome from './Patienthome';
import Pharmacistsview from './pharmacistsview';
import Patientsview from './patientsview';

function App() {
  return (
    <main className='container'>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Openpage />} />

        <Route path="/two" element={<Openpage2 />} />

        <Route path="/regpa" element={<Register />} />

        <Route path="/regph" element={<Registerr />} />

        <Route path="/adminhome" element={<Adminhome />} />

        <Route path="/pharhome" element={<Pharmacisthome />} />

        <Route path="/patienthome" element={<Patienthome />} />

        <Route path="/pharview" element={<Pharmacistsview />} />

        <Route path="/patientsview" element={<Patientsview />} />

      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;
