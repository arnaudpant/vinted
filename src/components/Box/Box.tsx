
import Affichage5 from './Affichage/Affichage5';

const Box = ({ images }: { images: string[] }) => {
  switch (images.length) {
    case 0:
      return <div>Pas d'images</div>;
    case 1:
      return <div>Une image</div>;
    case 2:
      return <div>Deux images</div>;
    case 3:
      return <div>Trois images</div>;
    case 4:
      return <div>Quatre images</div>;
    case 5:
      return <Affichage5 />;
    default:
      return <div>Plus de cinq images</div>;
  }
};

export default Box;