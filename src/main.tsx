import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { FakeShopProvider } from './context/FakeShopContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FakeShopProvider>
      <App />
    </FakeShopProvider>
  </React.StrictMode>,
);
