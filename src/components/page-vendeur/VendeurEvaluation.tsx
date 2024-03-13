/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
import useFakeUsers from '@/hooks/useFakeUsers';
import CommentFromUser from '../page-catalog/models/CommentFromUser';
import UserNoteStars from '../ui/UserNoteStars';
import { useQuery } from 'react-query';
import LoadingCircularProgress from '../ui/LoadingCircularProgress';
import getRandomIndex from '@/utils/Utils';

type Props = {
  stars: number;
  evaluations: number;
};

const VendeurEvaluation = ({ stars, evaluations }: Props) => {
  const { fetchUsers } = useFakeUsers();
  const { isLoading, data, isError } = useQuery({
    queryKey: ['fakeUsers'],
    queryFn: fetchUsers,
  });

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
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-semibold">{stars ?? 0}</h2>
        <div className="flex">
          <UserNoteStars note={stars ?? 0} />
        </div>
        <p>({evaluations})</p>
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

export default VendeurEvaluation;
