import getRandomNumberReviews from '@/utils/getRandomNumberReviews';
import getRandomStarsNote from '@/utils/getRandomStarsNote';
import UserTabs from './UserTabs';
import UserSynopsis from './UserSynopsis';
import { useParams } from 'react-router-dom';

const UserProfil = () => {
  const { userId } = useParams();
  console.log({ userId });

  const fakeUser = {
    id: 1,
    email: 'john@mail.com',
    password: 'changeme',
    name: 'Jhon',
    role: 'customer',
    avatar: 'https://i.imgur.com/LDOO4Qs.jpg',
    creationAt: '2024-01-23T02:52:35.000Z',
    updatedAt: '2024-01-23T02:52:35.000Z',
  };

  const fakeUserStatistic = {
    fakeStarsUser: getRandomStarsNote(),
    fakeNumberReviews: getRandomNumberReviews(),
  };

  if (!fakeUser) {
    return;
  }
  return (
    <div className="mx-4 sm:mx-8">
      <UserSynopsis
        fakeUser={fakeUser}
        fakeUserStatistic={fakeUserStatistic}
        userId={userId}
      />
      <UserTabs fakeUser={fakeUser} fakeUserStatistic={fakeUserStatistic} />
    </div>
  );
};

export default UserProfil;
