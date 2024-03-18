import { UserInfos } from '@/types/types';
import { ChevronRight, Clock, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = {
  seeMore: boolean;
  handleSeeMore: () => void;
  vendeur: UserInfos;
};

const BoxInfosVendeurView = ({ seeMore, handleSeeMore, vendeur }: Props) => {
  return (
    <>
      {/* Box */}
      <div className="flex h-20 cursor-pointer justify-between border-b bg-vintedBackground p-4 hover:bg-slate-50">
        {vendeur !== null && (
          <>
            <Link to="/vendeur" state={[vendeur]} className="flex flex-row">
              <img
                src={vendeur.photoURL}
                className="mr-2 h-12 w-12 rounded-full"
                data-testid="img-user-avatar"
              />
              <div>
                <h2>{vendeur.login}</h2>
                <div className="relative flex">
                  {Array.from({ length: vendeur.stars }, (_, index) => (
                    <Star
                      fill={'orange'}
                      color="vintedBackground"
                      className="h-4 w-4"
                      key={index}
                    />
                  ))}
                  <span className="ml-1 text-xs text-vintedTextGrisFonce">
                    {vendeur.evaluations}
                  </span>
                </div>
              </div>
            </Link>
            <div className="flex justify-between">
              <ChevronRight className="ml-2 h-6 w-6" />
            </div>
          </>
        )}
      </div>

      <div className="bg-vintedBackground p-4">
        <div className="flex items-center gap-2 text-[14px]  font-light">
          <MapPin className="h-4 w-4 text-vintedTextGrisFonce" />
          {vendeur.city}
        </div>
        <div className="flex items-center gap-2 pt-2 text-xs font-light">
          <Clock className="h-4 w-4 text-vintedTextGrisFonce" />
          Vu la dernière fois : il y a <span>1 heure</span>
        </div>
      </div>

      {/* Lois */}
      <div className="flex bg-vintedBackgroundCard p-4 text-[14px] text-vintedTextGrisFonce">
        {seeMore === true ? (
          <p>
            le droit de retrait visé à l’article L221-18 et la garantie générale
            de conformité visée aux articles L217-4 et suivants du Code de la
            consommation ne s’appliquent pas à ta transaction. Cependant, la
            garantie des défauts de la chose vendue visée aux articles 1641 et
            suivants du Code civil français s’applique. Voir également les
            dispositions applicables du{' '}
            <span className="cursor-pointer text-vintedGreen underline">
              droit des obligations
            </span>{' '}
            et de{' '}
            <span className="cursor-pointer text-vintedGreen underline">
              responsabilité civile
            </span>
            . Tous les achats que tu effectues au moyen du bouton « Acheter »
            sont couverts par notre service de{' '}
            <span className="cursor-pointer text-vintedGreen underline">
              Protection acheteurs.
            </span>
          </p>
        ) : (
          <p>
            Les lois en matière de protection des consommateur·trices ne
            s’appliquent pas à tes achats effectués auprès d’autres
            consommateur·trices. Plus précisément,
            <span
              className="cursor-pointer text-vintedGreen underline"
              onClick={handleSeeMore}
            >
              ... Voir plus
            </span>
          </p>
        )}
      </div>
    </>
  );
};

export default BoxInfosVendeurView;
