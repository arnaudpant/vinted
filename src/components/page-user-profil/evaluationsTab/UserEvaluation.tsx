import CommentFromUser from '@/components/page-catalog/models/CommentFromUser';
import UserNoteStars from '@/components/ui/UserNoteStars';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import React from 'react';


const UserEvaluation: React.FC = () => {
  const {authUser} = useFirebaseAuth()
  return (
    <>
      <div className="flex flex-col items-center justify-center">
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
      <CommentFromUser userId={1} />
      <CommentFromUser userId={2} />
    </>
  );
};

export default UserEvaluation;
