import React from 'react';
import ArticleAvailable from './ArticleAvailable';

const ArticlesAvailables = () => {
  return (
    <div className="bg-vintedTextGrisClair">
      <section
        className="grid grid-cols-2 mx-4 gap-3 sm:grid-cols-3 lg:grid-cols-4 text-sm text-vintedTextGrisFonce"
        id="articles"
      >
        <div className="w-full col-span-full bg-vintedBackgrounf py-3 pl-4 flex items-end">
          (137) articles disponibles
        </div>
        <ArticleAvailable />
        <ArticleAvailable />
        <ArticleAvailable />
        <ArticleAvailable />
        <ArticleAvailable />
        <ArticleAvailable />
      </section>
    </div>
  );
};

export default ArticlesAvailables;
