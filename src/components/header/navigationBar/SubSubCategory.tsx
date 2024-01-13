import { TypeSubSubCategory } from '@/types/types';

const SubSubCategory: React.FC<{
  subsubCategory: TypeSubSubCategory;
}> = ({ subsubCategory }) => {
  return (
    <button className="whitespace-nowrap truncate px-4 py-2 hover:bg-vintedBackgroundCard hover:cursor-pointer">
      {subsubCategory.title}
    </button>
  );
};

export default SubSubCategory;
