import React from 'react';

const TitleArticlesAvailables: React.FC<{
  title: string;
}> = ({ title }) => {
  // Pour la gestion du singulier et pluriel

  return (
    <div className="col-span-full flex w-full items-end  py-3 pl-4">
      {title}
    </div>
  );
};

export default TitleArticlesAvailables;
