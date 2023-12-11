import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ClassTimetable from './pages/ClassTimetable'
import Classes from './pages/Classes'
import JoinNow from './pages/JoinNow'
import SignInPage from './pages/SignInPage'
import Terms from './pages/Terms'
import Submission from './pages/Submission'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/ClassTimetable' element={<ClassTimetable />} />
      <Route path='/Classes' element={<Classes />} />
      <Route path='/JoinNow' element={<JoinNow />} />
      <Route path='/Terms' element={<Terms />} />
      <Route path='/SignInPage' element={<SignInPage />} />
      <Route path='/Submission' element={<Submission />} />
    </Routes>
  </BrowserRouter>
);


