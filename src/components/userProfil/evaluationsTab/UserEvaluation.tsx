import CommentFromUser from '@/components/ArticlesAvailables/models/CommentFromUser';
import UserNoteStars from '@/components/UserNoteStars';
import { FakeUserWithStatistic } from '@/types/types';
import getRandomStarsNote from '@/utils/getRandomStarsNote';
import React from 'react';

const UserEvaluation: React.FC<{
  userWithStatistics: FakeUserWithStatistic;
}> = ({ userWithStatistics }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-semibold">
          {userWithStatistics.starsRating}
        </h1>
        <div className="flex">
          <UserNoteStars note={userWithStatistics.starsRating} />
        </div>
        <p>({userWithStatistics.numberOfReviews})</p>
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
