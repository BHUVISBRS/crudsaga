import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEditUser from './pages/AddEditUser';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './Components/Organisms/Header';
import { Toaster } from 'react-hot-toast';
import ViewUser from './pages/ViewUser'

// import 'react-toastify/dist/ReactToastify

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard " element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addUser/:type" element={<AddEditUser />} />
        <Route path="/addUser/:type/:id" element={<AddEditUser />} />
        <Route path="/view/:id" element={<ViewUser />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App



