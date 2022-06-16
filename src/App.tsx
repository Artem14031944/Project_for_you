import React from 'react';
import { Layout } from './pages/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound';
import { Authorization } from './pages/Authorization/Authorization';
import { Registration } from './pages/Registration/Registration';
import { Account } from './pages/Account/Account';
import { Main } from './pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Main/>}/>
          <Route path="/authorization" element={<Authorization/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/personal_account" element={<Account/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
