import React from 'react';

export const withListArticlesAvailables =
  (WrappedComponent: React.FC) => () => {
    return (
      <div className="bg-vintedTextGrisClair">
        <section
          className="grid grid-cols-2 mx-4 gap-3 sm:grid-cols-3 lg:grid-cols-4 text-sm text-vintedTextGrisFonce"
          id="articles"
        >
          <WrappedComponent />
        </section>
      </div>
    );
  };

export default withListArticlesAvailables;
