import getRandomNumberReviews from '@/utils/getRandomNumberReviews';
import getRandomStarsNote from '@/utils/getRandomStarsNote';
import UserSynopsis from './UserSynopsis';
import UserTabs from './UserTabs';
import { FakeUser, FakeUserWithStatistic } from '@/types/types';
import useDataFakeShop from '@/hooks/useDataFakeShop';

const UserProfil = ({
  userId,
}: {
  userId: number;
}): JSX.Element | undefined => {
  const { fakeShopUsers }: { fakeShopUsers: FakeUser[] } = useDataFakeShop();
  console.log({ fakeShopUsers });
  const user: FakeUser = fakeShopUsers[userId];

  const userWithStatistics: FakeUserWithStatistic = {
    ...user,
    starsRating: getRandomStarsNote(),
    numberOfReviews: getRandomNumberReviews(),
  };

  if (!userWithStatistics) {
    return;
  }
  return (
    <div className="mx-4 sm:mx-8">
      <UserSynopsis userWithStatistics={userWithStatistics} />
      <UserTabs userWithStatistics={userWithStatistics} />
    </div>
  );
};

export default UserProfil;
