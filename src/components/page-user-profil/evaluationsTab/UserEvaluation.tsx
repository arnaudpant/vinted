import CommentFromUser from '@/components/page-catalog/models/CommentFromUser';
import UserNoteStars from '@/components/ui/UserNoteStars';
import getRandomStarsNote from '@/utils/getRandomStarsNote';
import React from 'react';

const UserEvaluation: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-semibold">{3}</h1>
        <div className="flex">
          <UserNoteStars note={3} />
        </div>
        <p>(200)</p>
        <a className="text-vintedGreen underline" href="">
          Comment fonctionnent les évaluations ?
        </a>
        <hr className="my-4" />
      </div>
      <CommentFromUser
        userId={1}
        comment="Top"
        starsRate={getRandomStarsNote()}
      />
      <CommentFromUser
        userId={1}
        comment="Merci super vendeur"
        starsRate={getRandomStarsNote()}
      />
    </>
  );
};

export default UserEvaluation;
