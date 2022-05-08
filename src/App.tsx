import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthProvider from 'auth/AuthProvider';
import PATHS from 'routes/path';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ThemeProviderComponent from 'theme/ThemeProvider';
import Routes from 'routes/routes';


function App() {

  return (
   <Router>
       <AuthProvider>

            <ThemeProviderComponent>
                <Routes></Routes>
            </ThemeProviderComponent>

       </AuthProvider>
   </Router>
  );
}

export default App;
