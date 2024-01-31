import { FakeUserWithStatistic } from '@/types/types';
import React from 'react';

const UserAboutDescription: React.FC<{
  userWithStatistics: FakeUserWithStatistic;
}> = ({ userWithStatistics }) => {
  if (!userWithStatistics) return;
  return (
    <div className="">
      <img
        src={userWithStatistics.avatar}
        alt="avatar utilisateur"
        className="mx-auto max-h-64 w-full object-cover sm:h-48 "
      />
      <div>
        <h1 className="text-xl font-semibold">{userWithStatistics.name}</h1>
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
