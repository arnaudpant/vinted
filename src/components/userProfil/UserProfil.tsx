import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import UserDressingProfil from './dressingTab/UserDressingProfil';
import { getRandomNumberReviews, getRandomStarsNote } from '@/utils/Utils';
import UserEvaluation from './evaluationsTab/UserEvaluation';
import UserAboutTab from './aboutTab/UserAboutTab';

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
    <Tabs defaultValue="drssing">
      <TabsList className="grid w-full grid-cols-3 ">
        <TabsTrigger value="dressing">dressing</TabsTrigger>
        <TabsTrigger value="evaluations">Evaluations</TabsTrigger>
        <TabsTrigger value="about">A propos</TabsTrigger>
      </TabsList>
      <TabsContent value="dressing">
        <UserDressingProfil
          fakeUser={fakeUser}
          fakeUserStatistic={fakeUserStatistic}
        />
      </TabsContent>
      <TabsContent value="evaluations">
        <UserEvaluation fakeUserStatistic={fakeUserStatistic} />
      </TabsContent>
      <TabsContent value="about">
        <UserAboutTab fakeUser={fakeUser} />
      </TabsContent>
    </Tabs>
  );
};

export default UserProfil;
