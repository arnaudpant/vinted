import React from 'react';

const CounterArticlesAvailable: React.FC<{
  counterProductsAvailable: number;
}> = ({ counterProductsAvailable }) => {
  // Pour la gestion du singulier et pluriel
  const availableProduct =
    counterProductsAvailable === 1
      ? '1 article disponible'
      : `${counterProductsAvailable} disponibles`;

  return (
    <div className="w-full col-span-full bg-vintedBackground py-3 pl-4 flex items-end">
      {counterProductsAvailable === 0
        ? 'Aucun article disponible'
        : availableProduct}
    </div>
  );
};

export default CounterArticlesAvailable;
