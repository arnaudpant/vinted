import React from 'react';

const TitleArticlesAvailables: React.FC<{
  title: string;
}> = ({ title }) => {
  // Pour la gestion du singulier et pluriel

  return (
    <div className="w-full col-span-full bg-vintedBackground py-3 pl-4 flex items-end">
      {title}
    </div>
  );
};

export default TitleArticlesAvailables;
