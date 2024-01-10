import { useFakeShop } from '@/context/FakeShopContext';
import { FakeUser } from '@/types/types';
import { ChevronRight, Star, MapPin, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

const BoxInfosVendeur = () => {
  const { fakeShopUsers } = useFakeShop();
  const [user, setUser] = useState<FakeUser | null>(null);

  useEffect(() => {
    fakeShopUsers.length > 0 && setUser(fakeShopUsers[0]);
  }, [fakeShopUsers]);
  console.log(fakeShopUsers);

  return (
    // Global
    <div className="px-[10px] my-4 ">
      {/* Box */}
      <div className="flex justify-between h-20 p-4 cursor-pointer hover:bg-slate-50 border-b">
        <div className="flex">
          {user !== null && (
            <>
              <img src="/avatar.png" className="h-12 w-12 rounded-full mr-2" />
              <div>
                <h2>{user.name}</h2>
                <div className="flex relative">
                  <Star
                    fill="orange"
                    color="vintedBackground"
                    className="h-4 w-4"
                  />
                  <Star
                    fill="orange"
                    color="vintedBackground"
                    className="h-4 w-4"
                  />
                  <Star
                    fill="orange"
                    color="vintedBackground"
                    className="h-4 w-4"
                  />
                  <Star
                    fill="orange"
                    color="vintedBackground"
                    className="h-4 w-4"
                  />
                  <Star
                    fill="orange"
                    color="vintedBackground"
                    className="h-4 w-4"
                  />
                  <span className="text-xs text-vintedTextGrisFonce ml-1">
                    130
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex  justify-between">
          <ChevronRight className="h-6 w-6 ml-2" />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 font-light">
          <span>
            <MapPin className="h-4 w-4 text-vintedTextGrisFonce" />
          </span>
          Paris, France
        </div>
        <div className="flex items-center gap-2 font-light">
          <span>
            <Clock className="h-4 w-4 text-vintedTextGrisFonce" />
          </span>
          Vu la dernière fois : il y a <span>1 heure</span>
        </div>
      </div>

      {/* Lois */}
      <div className="p-4 bg-vintedBackgroundCard">
        <p>
          Les lois en matière de protection des consommateur·trices ne
          s’appliquent pas à tes achats effectués auprès d’autres
          consommateur·trices. Plus précisément ...
        </p>
      </div>
    </div>
  );
};

export default BoxInfosVendeur;
