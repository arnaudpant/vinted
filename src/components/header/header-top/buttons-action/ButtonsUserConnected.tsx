/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { Mail, Bell, Heart, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import MenuUserConnected from './MenuUserConnected';

const ButtonsUserConnected = () => {
  const { authUser } = useFirebaseAuth();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative flex items-center gap-2 text-vintedTextGrisClair">
      <Mail className="h-5 cursor-pointer" />
      <Bell className="h-5 cursor-pointer" />
      <Heart className="h-5 cursor-pointer" />
      <div
        className="flex cursor-pointer items-center"
        onClick={() => setIsMenuOpen((v) => !v)}
      >
        {authUser && authUser.userDocument?.photoURL === '' ? (
          <img
            src="./avatar.png"
            alt="photo profil"
            className="h-8 w-8 rounded-full"
          />
        ) : (
          <img
            src={`${authUser?.userDocument?.photoURL}`}
            alt={`photo de ${authUser?.userDocument?.login}`}
            className="h-8 w-8 rounded-full"
          />
        )}
        <ChevronDown className="h-4" />
      </div>
      {isMenuOpen && <MenuUserConnected setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
};

export default ButtonsUserConnected;
