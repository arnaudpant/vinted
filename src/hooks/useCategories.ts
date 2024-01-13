import { headerCategories } from '@/data/categoriesHeader';
import { TypeCategory } from '@/types/types';
import { useState } from 'react';

const useCategories: () => {
  selectedIdCategory: number;
  selectCategory: (id: number) => void;
  NONE_CATEGORY: number;
  displayOnScreenPopCategories: boolean;
  setDisplayOnScreenPopCategories: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  offsetSelectedCategory: number;
  setOffsetSelectedCategory: React.Dispatch<React.SetStateAction<number>>;
  activeCategory: TypeCategory | undefined;
} = () => {
  const NONE_CATEGORY: number = 0;
  const [selectedIdCategory, setSelectedIdCategory] = useState(NONE_CATEGORY);

  const selectCategory: (id: number) => void = (id) => {
    setSelectedIdCategory(id);
  };

  const INITIAL_OFFSET_LEFT = 0;
  const [offsetSelectedCategory, setOffsetSelectedCategory] =
    useState(INITIAL_OFFSET_LEFT);

  const [displayOnScreenPopCategories, setDisplayOnScreenPopCategories] =
    useState(false);

  const activeCategory = headerCategories.find(
    (category: TypeCategory) => category.id === selectedIdCategory,
  );
  return {
    selectedIdCategory,
    selectCategory,
    NONE_CATEGORY,
    displayOnScreenPopCategories,
    setDisplayOnScreenPopCategories,
    offsetSelectedCategory,
    setOffsetSelectedCategory,
    activeCategory,
  };
};
export default useCategories;
