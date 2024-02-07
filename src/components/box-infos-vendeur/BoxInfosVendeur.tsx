import { useFakeShop } from '@/context/FakeShopContext';
import { FakeUser } from '@/types/types';
import { useEffect, useState } from 'react';
import BoxInfosVendeurView from './BoxInfosVendeurView';


const BoxInfosVendeur = () => {
  const { fakeShopUsers } = useFakeShop();
  const [user, setUser] = useState<FakeUser | null>(null);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const LAST_USER_ID = 8;

  const handleSeeMore = () => {
    setSeeMore(true);
  };

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * LAST_USER_ID);
    fakeShopUsers.length > 0 && setUser(fakeShopUsers[randomNumber]);
  }, [fakeShopUsers]);

  return (
    <div className="py-4">
      <BoxInfosVendeurView seeMore={seeMore} handleSeeMore={handleSeeMore} user={user} />
    </div>
  );};

export default BoxInfosVendeur;
