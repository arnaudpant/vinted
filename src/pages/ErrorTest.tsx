('use client');
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorTest: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <button
        onClick={() => {
          throw new Error('erreur ');
        }}
        className="bg-red-300"
      >
        Générere une erreur
      </button>
    </ErrorBoundary>
  );
};

export default ErrorTest;
