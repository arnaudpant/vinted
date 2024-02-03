import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import UserAboutTab from './aboutTab/UserAboutTab';
import UserDressingProfil from './dressingTab/UserDressingProfil';
import UserEvaluation from './evaluationsTab/UserEvaluation';

const UserTabs: React.FC = () => {
  return (
    <div>
      <Tabs defaultValue="dressing">
        <TabsList className="grid w-full grid-cols-3 sm:w-1/2 sm:grid-cols-2 ">
          <TabsTrigger value="dressing">dressing</TabsTrigger>
          <TabsTrigger value="evaluations">Evaluations</TabsTrigger>
          <TabsTrigger value="about" className="sm:hidden">
            A propos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="dressing">
          <UserDressingProfil />
        </TabsContent>
        <TabsContent value="evaluations">
          <UserEvaluation />
        </TabsContent>
        <TabsContent value="about" className="sm:hidden">
          <UserAboutTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserTabs;
