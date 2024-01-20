import { Heart } from 'lucide-react';

const ArticleInfoButtons = () => {
  const buttonCommonCss = 'rounded py-2 border border-vintedGreen';
  return (
    <div className="flex flex-col gap-2">
      <button className={`bg-vintedGreen text-white ${buttonCommonCss}`}>
        Acheter
      </button>
      <button className={`bg-white text-vintedGreen ${buttonCommonCss}`}>
        Faire une offre
      </button>
      <button className={`bg-white text-vintedGreen ${buttonCommonCss}`}>
        Message
      </button>
      <button
        className={`bg-white text-vintedGreen ${buttonCommonCss} flex flex-row justify-center gap-1`}
      >
        <Heart />
        <span>Favoris</span>
      </button>
    </div>
  );
};

export default ArticleInfoButtons;
