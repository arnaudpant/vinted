import React from 'react';

export const withListArticlesAvailables =
  <P extends {}>(WrappedComponent: React.FC<P>) =>
  (props: P) => {
    return (
      <div className="bg-vintedTextGrisClair">
        <section
          className="grid grid-cols-2 mx-4 gap-3 sm:grid-cols-3 lg:grid-cols-4 text-sm text-vintedTextGrisFonce"
          id="articles"
        >
          <WrappedComponent {...props} />
        </section>
      </div>
    );
  };

export default withListArticlesAvailables;
