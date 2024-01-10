import React from 'react';

const useSubCategories = () => {
  const DEFAULT_SUB_CATEGORY_ID = 1;
  const [selectedSubCategoryId, setSelectedSubCategoryId] = React.useState(
    DEFAULT_SUB_CATEGORY_ID,
  );

  return { selectedSubCategoryId, setSelectedSubCategoryId };
};

export default useSubCategories;
