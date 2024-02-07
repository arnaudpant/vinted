//use client est mentionné dans la doc react-error-boundary
'use client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { FakeShopProvider } from './context/FakeShopContext.tsx';
import './index.css';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './pages/ErrorPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FakeShopProvider>
      <ErrorBoundary fallback={<ErrorPage />}>
        <App />
      </ErrorBoundary>
    </FakeShopProvider>
  </React.StrictMode>,
);
