import React from 'react';

export const withListArticlesAvailables =
  <P extends {}>(WrappedComponent: React.FC<P>) =>
  (props: P) => {
    return (
      <>
        <section
          className="mx-4 grid grid-cols-2 gap-3 text-sm text-vintedTextGrisFonce sm:grid-cols-3 lg:grid-cols-4"
          id="articles"
        >
          <WrappedComponent {...props} />
        </section>
      </>
    );
  };

export default withListArticlesAvailables;
