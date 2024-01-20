import { FakeProduct } from '@/types/types';
import { getTimeDifferenceString } from '@/utils/getTimeDifferenceString';

type ArticleDetailsProps = {
  article: FakeProduct;
};

const ArticleDetails = ({ article }: ArticleDetailsProps) => {
  const { creationAt } = article;
  return (
    <div className="grid grid-cols-2 text-vintedTextGrisFonce">
      <span>MARQUE</span>
      <span>TOMMY HILFIGER</span>
      <span>TAILLE</span>
      <span>12 ANS / 152 CM</span>
      <span>ETAT</span>
      <span>TRES BON ETAT</span>
      <span>COULEUR</span>
      <span>ROUGE</span>
      <span>LOCALISATION</span>
      <span>LE BOULLAY-LES-DEUX-ÉGLISES, FRANCE</span>
      <span>OPTIONS DE PAIEMENT</span>
      <span>CARTE BANCAIRE</span>
      <span>NOMBRE DE VUES</span>
      <span>1</span>
      <span>AJOUTÉ</span>
      <span>{getTimeDifferenceString(creationAt)}</span>
    </div>
  );
};

export default ArticleDetails;
