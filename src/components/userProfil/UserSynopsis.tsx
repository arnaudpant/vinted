import React from 'react';
import { MapPin, Clock, Rss, CheckCircle } from 'lucide-react';
import UserNoteStars from '../UserNoteStars';
import ButtonDisconnect from '../modals/authentification/ButtonDisconnect';
import ButtonContact from './dressingTab/ButtonContact';
import UserInfoLine from './models/UserInfoLine';
import { FakeUserWithStatistic } from '@/types/types';

const UserSynopsis: React.FC<{
  userWithStatistics: FakeUserWithStatistic;
}> = ({ userWithStatistics }) => {
  if (!userWithStatistics) return;
  return (
    <div className="mb-16 hidden justify-center space-x-8 sm:flex">
      <img
        src={userWithStatistics.avatar}
        alt="avatar"
        className="h-48 w-48 rounded-full object-cover"
      />
      <div>
        <h1 className="font-semibold">{userWithStatistics.name}</h1>
        <div className="flex space-x-2">
          <UserNoteStars note={userWithStatistics.starsRating} />
          <span>{userWithStatistics.numberOfReviews} évaluations</span>
        </div>
        <div className="my-4 flex space-x-4">
          <ButtonContact
            backgroundColor={'white'}
            textColor={'text-vintedGreen'}
          >
            Contacter
          </ButtonContact>
          <ButtonContact
            backgroundColor={'bg-vintedGreen'}
            textColor={'text-white'}
          >
            Suivre
          </ButtonContact>
        </div>
        <div className="grid w-full grid-cols-2 gap-x-32 gap-y-4 text-nowrap  text-vintedTextBlackVar">
          <div className="col-start-1">
            <h2 className="text-sm">A propos</h2>
            <UserInfoLine ComponentPicture={<MapPin />}>
              Bordeaux , France
            </UserInfoLine>
            <UserInfoLine ComponentPicture={<Clock />}>
              Bordeaux , France
            </UserInfoLine>
            <UserInfoLine ComponentPicture={<MapPin />}>
              6 abonnés , 3 abonnements
            </UserInfoLine>
          </div>
          <div className="col-start-2">
            <h2 className="text-sm">A propos</h2>
            <UserInfoLine ComponentPicture={<CheckCircle />}>
              Email
            </UserInfoLine>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSynopsis;
