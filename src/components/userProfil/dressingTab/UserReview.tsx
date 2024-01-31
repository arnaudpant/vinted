import UserNoteStars from '@/components/UserNoteStars';
import { FakeUserWithStatistic } from '@/types/types';
import { CircleUserRound } from 'lucide-react';

const UserReview: React.FC<{ userWithStatistics: FakeUserWithStatistic }> = ({
  userWithStatistics,
}) => {
  return (
    <div className="flex items-center space-x-3">
      {userWithStatistics.avatar ? (
        <img
          src={userWithStatistics.avatar}
          alt="avatar utilisateur"
          className="rounded-full  "
          width={'48px'}
        />
      ) : (
        <CircleUserRound size={'48px'} color="green" />
      )}

      <div className="w-fit leading-tight">
        <h1>{userWithStatistics.name}</h1>
        <div className="flex">
          <UserNoteStars note={userWithStatistics.starsRating} />

          {
            <span className="ml-2">
              {userWithStatistics.numberOfReviews === 0
                ? 'Aucun avis'
                : userWithStatistics.numberOfReviews}
            </span>
          }
        </div>
      </div>
    </div>
  );
};

export default UserReview;
