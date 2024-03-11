import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { FakeShopProvider } from './context/FakeShopContext.tsx';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <FakeShopProvider>
      <App />
    </FakeShopProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
