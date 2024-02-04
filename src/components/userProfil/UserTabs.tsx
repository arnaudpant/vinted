import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import UserAboutTab from './aboutTab/UserAboutTab';
import UserDressingProfil from './dressingTab/UserDressingProfil';
import UserEvaluation from './evaluationsTab/UserEvaluation';

const UserTabs: React.FC = () => {
  const tabs = [
    {
      value: 'dressing',
      label: 'dressing',
      component: <UserDressingProfil />,
    },
    {
      value: 'evaluations',
      label: 'Evaluations',
      component: <UserEvaluation />,
    },
    {
      value: 'about',
      label: 'A propos',
      component: <UserAboutTab />,
      className: 'sm:hidden',
    },
  ];
  return (
    <div>
      <Tabs defaultValue={tabs[0].value}>
        <TabsList className="grid w-full grid-cols-3 sm:w-1/2 sm:grid-cols-2 ">
          {tabs.map((tab) => {
            return (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={tab.className}
              >
                {tab.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {tabs.map((tab) => {
          return (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className={tab.className}
            >
              {tab.component}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default UserTabs;
