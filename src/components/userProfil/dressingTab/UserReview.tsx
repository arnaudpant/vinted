import { CircleUserRound, Star } from 'lucide-react';

const UserReview: React.FC<{ fakeUser: object; fakeUserStatistic: object }> = ({
  fakeUser,
  fakeUserStatistic,
}) => {
  const { fakeStarsUser, fakeNumberReviews } = fakeUserStatistic;
  return (
    <div className="flex items-center space-x-3">
      {fakeUser.avatar ? (
        <img src={fakeUser.avatar} className="rounded-full  " width={'48px'} />
      ) : (
        <CircleUserRound size={'48px'} color="green" />
      )}

      <div className="w-fit leading-tight">
        <h1>xavierland</h1>
        <div className="flex">
          {fakeStarsUser !== 0 ? (
            Array.from({ length: fakeStarsUser }, (_, index) => (
              <Star fill={'orange'} strokeWidth={0} key={index} />
            ))
          ) : (
            <Star color="yellow" />
          )}
          {
            <span className="ml-2">
              {fakeNumberReviews === 0 ? 'Aucun avis' : fakeNumberReviews}
            </span>
          }
        </div>
      </div>
    </div>
  );
};

export default UserReview;
