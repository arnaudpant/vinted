import React from 'react';
import UserAboutStatistics from './UserAboutStatistics';

const UserAboutDescription = ({ fakeUser }) => {
  return (
    <>
      <img
        src={fakeUser.avatar}
        alt="avatar utilisateur"
        className="w-full mx-auto max-h-64 object-cover"
      />
      <h1 className="text-xl font-semibold">{fakeUser.name}</h1>
      <ul className="list-disc list-inside ">
        <li>Todo en buen estado</li>
        <li>
          Hago envios dos veces a la semana, tengo los puntos de envío a 15 km.
        </li>
        <li>
          Hago envios dos veces a la semana, tengo los puntos de envío a 15 km.
        </li>
        <li>Activados descuentos por lotes</li>
        <li>Felices compras 🛍😊😉</li>
      </ul>
    </>
  );
};

export default UserAboutDescription;
