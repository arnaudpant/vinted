import  useDataFakeShop  from '../../hooks/useDataFakeShop';
import { ChevronRight } from 'lucide-react';


const BoxInfosVendeur = () => {
  const { fakeShopUsers } = useDataFakeShop();

  console.log(fakeShopUsers);

  return (
    // Global
    <div className="px-[10px] ">
      {/* Box */}
      <div className="flex justify-between h-20 p-4 cursor-pointer hover:bg-slate-50">
        <div className="flex">
          <img src="" className="h-12 w-12 rounded-full mr-2" />
          <div>
            <h2>Name</h2>
            <span>★★★★★</span>
          </div>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-6 w-6 ml-2" />
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
