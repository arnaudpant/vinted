import React from 'react';

export const useCategories = () => {
  const NONE_CATEGORY: number = 0;
  const [selectedIdCategory, setSelectedIdCategory] =
    React.useState(NONE_CATEGORY);

  const selectCategory: (id: number) => void = (id) => {
    setSelectedIdCategory(id);
  };

  return { NONE_CATEGORY, selectedIdCategory, selectCategory };
};
