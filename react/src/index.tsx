import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import GameProvider from './context/GameProvider';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GameProvider>
        <App/>
      </GameProvider>
    </AuthProvider>
  </React.StrictMode>
);
