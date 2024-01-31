import UserNoteStars from '@/components/UserNoteStars';
import { FakeUserWithStatistic } from '@/types/types';

const UserAboutStatistics = ({
  userWithStatistics,
}: {
  userWithStatistics: FakeUserWithStatistic;
}) => {
  return (
    <div className="flex space-x-2">
      <UserNoteStars note={userWithStatistics.starsRatings} />
      <span>{userWithStatistics.numberOfReviews} évaluations</span>
    </div>
  );
};

export default UserAboutStatistics;
