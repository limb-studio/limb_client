import logo from './logo.svg';
import './App.css';
import React from 'react';
import { NavHeader } from './NavHeader';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css"
import DocNew from './DocNew';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import AdminPage from './admin/AdminPage';
import AdminUsersPage from './admin/users/AdminUsersPage';
import AdminUserEditPage from './admin/users/AdminUserEditPage';

function App() {
  return (
    <div className="App flex flex-column">
      <NavHeader></NavHeader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="docnewsz" element={<DocNew />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="admin/users" element={<AdminUsersPage />} />
        <Route path="admin/users/:id" element={<AdminUserEditPage />} />
      </Routes>
    </div>
  );
}

export default App;
