import UserEvaluation from './evaluationsTab/UserEvaluation';
import UserAboutTab from './aboutTab/UserAboutTab';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CardsProductWithAvatar from '../ui/CardsProductWithAvatar';

const UserTabs: React.FC = () => {
  const tabs = [
    {
      value: 'dressing',
      label: 'dressing',
      component: <CardsProductWithAvatar />,
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
      <Tabs defaultValue={tabs[0].value}>
        <TabsList className="grid w-full grid-cols-3 sm:w-1/2 sm:grid-cols-2">
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
  );
};

export default UserTabs;
