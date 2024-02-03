import { UserContext } from '@/pages/User';
import { UserInterface } from '@/types/types';
import { UserRound } from 'lucide-react';
import React, { useContext } from 'react';

const UserAboutDescription: React.FC = () => {
  const user: UserInterface = useContext(UserContext);
  if (!user) return;
  return (
    <div className="flex flex-col">
      {user.userDocument?.photoURL ? (
        <img
          src={user.userDocument?.photoURL}
          alt="avatar utilisateur"
          className="mx-auto max-h-64 w-full  object-cover sm:h-4 "
        />
      ) : (
        <UserRound size={64} color="green" className="self-center" />
      )}

      <div>
        <h1 className="text-xl font-semibold">
          {user.displayName ?? 'Vinted'}
        </h1>
        <ul className="list-inside list-disc ">
          <li>Todo en buen estado</li>
          <li>
            Hago envios dos veces a la semana, tengo los puntos de envío a 15
            km.
          </li>
          <li>
            Hago envios dos veces a la semana, tengo los puntos de envío a 15
            km.
          </li>
          <li>Activados descuentos por lotes</li>
          <li>Felices compras 🛍😊😉</li>
        </ul>
      </div>
    </div>
  );
};

export default UserAboutDescription;
