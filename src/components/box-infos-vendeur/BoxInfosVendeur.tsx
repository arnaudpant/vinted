import { useFakeShop } from '@/context/FakeShopContext';
import { ChevronRight } from 'lucide-react';

const BoxInfosVendeur = () => {
  const { fakeShopUsers } = useFakeShop();

  console.log(fakeShopUsers);

  return (
    // Global
    <div className="px-[10px] ">
      {/* Box */}
      <div className="flex h-20 cursor-pointer justify-between p-4 hover:bg-slate-50">
        <div className="flex">
          <img src="" className="mr-2 h-12 w-12 rounded-full" />
          <div>
            <h2>Name</h2>
            <span>★★★★★</span>
          </div>
        </div>
        <div className="flex items-center">
          <ChevronRight className="ml-2 h-6 w-6" />
        </div>
      </div>

      <div>
        <p>
          <span></span>Pays
        </p>
        <p>
          <span></span>Vu la dernière fois : il y a <span></span>
        </p>
      </div>

      {/* Lois */}
      <div className="">
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
