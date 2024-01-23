import React from 'react';
import { CheckCircle2, MapPin, Rss } from 'lucide-react';
import UserInfoLine from '../models/UserInfoLine';

const UserDressingInfos = () => {
  return (
    <div>
      <UserInfoLine ComponentPicture={<CheckCircle2 />}>
        <p>Google, Email</p>
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<MapPin />}>
        <p>Espagne</p>
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<Rss />}>
        <p>
          <span className="underline text-vintedGreen">122</span>abonnés ,
          <span className="underline text-vintedGreen">101</span> abonnements
        </p>
      </UserInfoLine>
    </div>
  );
};

export default UserDressingInfos;
