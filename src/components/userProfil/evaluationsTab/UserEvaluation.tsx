import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const UserEvaluation: React.FC<{ fakeUserStatistic: object }> = ({
  fakeUserStatistic,
}) => {
  const { fakeStarsUser, fakeNumberReviews } = fakeUserStatistic;
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-semibold text-6xl">{fakeStarsUser}</h1>
      <div className="flex">
        {Array.from({ length: fakeStarsUser }, (_, index) => {
          return <Star color="orange" fill="orange" key={index} />;
        })}
      </div>
      <p>({fakeNumberReviews})</p>
      <Link to={'/'} className="underline text-vintedGreen">
        Comment fonctionnent les évaluations ?
      </Link>
      <hr className="my-4" />
    </div>
  );
};

export default UserEvaluation;
