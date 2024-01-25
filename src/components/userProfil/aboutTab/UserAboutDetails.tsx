import React from 'react';
import UserInfoLine from '../models/UserInfoLine';
import { MapPin, Clock, Rss } from 'lucide-react';

const UserAboutDetails = () => {
  return (
    <div>
      <UserInfoLine ComponentPicture={<MapPin />}>
        <p>Espagne</p>
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<Clock />}>
        <p>Connecté il y&apos;a 23 minutes </p>
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<Rss />}>
        <p>
          <span className="text-vintedGreen underline">79</span> abonnés
        </p>
      </UserInfoLine>
    </div>
  );
};

export default UserAboutDetails;
