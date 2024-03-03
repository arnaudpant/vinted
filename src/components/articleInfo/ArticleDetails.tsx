import { ArticleForSale } from '@/types/types';
import getRandomIndex from '@/utils/Utils';


type Props = {
  article: ArticleForSale;
};

const ArticleDetails = ({ article }: Props) => {

  return (
    <div className="grid grid-cols-2 pb-4 pt-2 text-xs text-vintedTextGrisFonce">
      <span>MARQUE</span>
      <span>{article.brandArticle?.toUpperCase()}</span>
      <span>ETAT</span>
      <span>{article.etat}</span>
      <span>COULEUR</span>
      <span>{article.color}</span>
      <span>OPTIONS DE PAIEMENT</span>
      <span>CARTE BANCAIRE</span>
      <span>NOMBRE DE VUES</span>
      <span>{getRandomIndex(5, 50)}</span>
    </div>
  );
};

export default ArticleDetails;
