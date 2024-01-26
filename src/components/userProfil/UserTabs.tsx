import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import UserDressingProfil from './dressingTab/UserDressingProfil';
import UserEvaluation from './evaluationsTab/UserEvaluation';
import UserAboutTab from './aboutTab/UserAboutTab';

const UserTabs: React.FC<{ fakeUser: object; fakeUserStatistic: object }> = ({
  fakeUser,
  fakeUserStatistic,
}) => {
  return (
    <div>
      <Tabs defaultValue="dressing">
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-2 sm:w-1/2 ">
          <TabsTrigger value="dressing">dressing</TabsTrigger>
          <TabsTrigger value="evaluations">Evaluations</TabsTrigger>
          <TabsTrigger value="about" className="sm:hidden">
            A propos
          </TabsTrigger>
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
        <TabsContent value="about" className="sm:hidden">
          <UserAboutTab fakeUser={fakeUser} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserTabs;
