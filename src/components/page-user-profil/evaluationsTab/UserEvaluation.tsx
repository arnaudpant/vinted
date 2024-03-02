import CommentFromUser from '@/components/page-catalog/models/CommentFromUser';
import UserNoteStars from '@/components/ui/UserNoteStars';
import getRandomIndex from '@/utils/Utils';
import React from 'react';
import { Link } from 'react-router-dom';

const UserEvaluation: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-semibold">{3}</h1>
        <div className="flex">
          <UserNoteStars note={4} />
        </div>
        <p>({getRandomIndex(1, 20)})</p>
        <Link className="text-vintedGreen underline" to="/">
          Comment fonctionnent les évaluations ?
        </Link>
        <hr className="my-4" />
      </div>
      <CommentFromUser
        userId={1}
      />
      <CommentFromUser
        userId={2}
      />
    </>
  );
};

export default UserEvaluation;
