import { getRandomNumberReviews, getRandomStarsNote } from '@/utils/Utils';
import UserTabs from './UserTabs';
import UserSynopsis from './UserSynopsis';

const UserProfil = () => {
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
    <>
      <UserSynopsis fakeUser={fakeUser} fakeUserStatistic={fakeUserStatistic} />
      <UserTabs fakeUser={fakeUser} fakeUserStatistic={fakeUserStatistic} />
    </>
  );
};

export default UserProfil;
