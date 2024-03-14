/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import CommentFromUser from '@/components/page-catalog/models/CommentFromUser';
import LoadingCircularProgress from '@/components/ui/LoadingCircularProgress';
import UserNoteStars from '@/components/ui/UserNoteStars';
import { useAuth } from '@/context/AuthUserContext';
import useFakeUsers from '@/hooks/useFakeUsers';
import getRandomIndex from '@/utils/Utils';
import { useQuery } from 'react-query';

const UserEvaluation: React.FC = () => {
  const { authUser } = useAuth();
  const { fetchUsers } = useFakeUsers();
  const { isLoading, data, isError } = useQuery('fakeUsers', fetchUsers);


  if (isLoading) {
    return (
      <div className="flex h-40 flex-col items-center justify-center">
        <LoadingCircularProgress />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-40 flex-col items-center justify-center">
        <p className="py-4 text-xl text-vintedGreen">
          Une erreur est survenue !
        </p>
      </div>
    );
  }

  const numberRandom = getRandomIndex(1, 5);


  return (
    <>
      <div className="flex flex-col items-center justify-center pt-4">
        <h2 className="text-6xl font-semibold">
          {authUser?.userDocument?.stars ?? 0}
        </h2>
        <div className="flex">
          <UserNoteStars note={authUser?.userDocument?.stars ?? 0} />
        </div>
        <p>({authUser?.userDocument?.evaluations})</p>
        <p className="cursor-not-allowed text-vintedGreen underline">
          Comment fonctionnent les évaluations ?
        </p>
        <hr className="my-4" />
      </div>
      {data && (
        <>
          <CommentFromUser user={data.data[numberRandom]} />
          <CommentFromUser user={data.data[numberRandom + 1]} />
        </>
      )}
    </>
  );
};

export default UserEvaluation;
