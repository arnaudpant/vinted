import { UserInfos } from '@/types/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import VendeurDressing from './VendeurDressing';
import VendeurEvaluation from './VendeurEvaluation';

type Props = {
  vendeur: UserInfos;
};

const VendeurTabs = ({ vendeur }: Props) => {
  return (
    <Tabs defaultValue='dressing'>
      <TabsList className="grid w-full grid-cols-3 sm:w-1/2 sm:grid-cols-2">
        <TabsTrigger key={1} value="dressing">
          Dressing
        </TabsTrigger>
        <TabsTrigger key={2} value="evaluations">
          Evaluations
        </TabsTrigger>
      </TabsList>
      <TabsContent key={1} value="dressing">
        {vendeur && <VendeurDressing vendeur={vendeur.userId} />}
      </TabsContent>
      <TabsContent key={2} value="evaluations">
        {vendeur && <VendeurEvaluation stars={vendeur.stars} evaluations={vendeur.evaluations} />}
      </TabsContent>
    </Tabs>
  );
};

export default VendeurTabs;
