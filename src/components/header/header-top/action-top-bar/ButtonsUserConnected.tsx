/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Mail, Bell, Heart, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import MenuUserConnected from './MenuUserConnected';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthUserContext';

const ButtonsUserConnected = () => {
  const { authUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative flex items-center gap-2 text-vintedTextGrisClair">
      <Mail className="h-5 cursor-pointer" />
      <Bell className="h-5 cursor-pointer" />
      <Link to="/favoris" state={authUser?.userDocument?.listArticlesFavoris}>
        <Heart className="h-5 cursor-pointer" />
      </Link>
      <div
        className="flex cursor-pointer items-center"
        onClick={() => setIsMenuOpen((v) => !v)}
      >
        {authUser && authUser.userDocument?.photoURL === '' ? (
          <img
            src="/avatar.png"
            alt=" profil"
            className="h-8 w-8 rounded-full"
          />
        ) : (
          <img
            src={`${authUser?.userDocument?.photoURL}`}
            alt={` ${authUser?.userDocument?.login}`}
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
