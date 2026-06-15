import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './index.css';

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
