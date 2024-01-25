import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const UserEvaluation: React.FC<{ fakeUserStatistic: object }> = ({
  fakeUserStatistic,
}) => {
  const { fakeStarsUser, fakeNumberReviews } = fakeUserStatistic;
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl font-semibold">{fakeStarsUser}</h1>
      <div className="flex">
        {Array.from({ length: fakeStarsUser }, (_, index) => {
          return <Star color="orange" fill="orange" key={index} />;
        })}
      </div>
      <p>({fakeNumberReviews})</p>
      <a className="text-vintedGreen underline">
        Comment fonctionnent les évaluations ?
      </a>
      <hr className="my-4" />
      <p>Evaluation1</p>
      <p>Evaluation2</p>
    </div>
  );
};

export default UserEvaluation;
