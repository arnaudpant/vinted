import { useFakeShop } from '@/context/FakeShopContext';

import { FakeUser } from '@/types/types';
import { ChevronRight, Star, MapPin, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';


const BoxInfosVendeur = () => {
  const { fakeShopUsers } = useFakeShop();
  const [user, setUser] = useState<FakeUser | null>(null);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const fakeStarsUser: number = 5
  const LAST_USER_ID = 8;

  const handleSeeMore = () => {
    setSeeMore(true);
  };

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * LAST_USER_ID);
    fakeShopUsers.length > 0 && setUser(fakeShopUsers[randomNumber]);
  }, [fakeShopUsers]);

  return (
    // Global
    <div className="my-4 px-[10px] ">
      {/* Box */}

      <div className="flex h-20 cursor-pointer justify-between border-b p-4 hover:bg-slate-50">
        <div className="flex">
          {user !== null && (
            <>
              <img src={user.avatar} className="mr-2 h-12 w-12 rounded-full" />
              <div>
                <h2>{user.name}</h2>
                <div className="relative flex">
                  {Array.from({ length: fakeStarsUser }, (_, index) => (
                    <Star
                      fill={'orange'}
                      color="vintedBackground"
                      className="h-4 w-4"
                      key={index}
                    />
                  ))}
                  <span className="ml-1 text-xs text-vintedTextGrisFonce">
                    130
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex  justify-between">

          <ChevronRight className="ml-2 h-6 w-6" />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 font-light">
          <MapPin className="h-4 w-4 text-vintedTextGrisFonce" />
          Paris, France
        </div>
        <div className="flex items-center gap-2 font-light">
          <Clock className="h-4 w-4 text-vintedTextGrisFonce" />
          Vu la dernière fois : il y a <span>1 heure</span>
        </div>
      </div>

      {/* Lois */}
      <div className="flex bg-vintedBackgroundCard p-4">
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
    </div>
)};

export default BoxInfosVendeur;
