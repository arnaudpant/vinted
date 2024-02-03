import { Heart } from 'lucide-react';
import ArticleButton from './ArticleButton';

const ArticleInfoButtons = () => {
  return (
    <div className="flex flex-col gap-2">
      <ArticleButton
        backgroundColor="bg-vintedGreen"
        textColor="text-white"
        label="Acheter"
      />
      <ArticleButton
        backgroundColor="bg-white"
        textColor="text-vintedGreen"
        label="Faire une offre"
      />
      <ArticleButton
        backgroundColor="bg-white"
        textColor="text-vintedGreen"
        label="Message"
      />
      <button
        className={`flex flex-row justify-center gap-1 rounded border border-vintedGreen bg-white py-2 text-vintedGreen`}
      >
        <Heart />
        <span>Favoris</span>
      </button>
    </div>
  );
};

export default ArticleInfoButtons;
