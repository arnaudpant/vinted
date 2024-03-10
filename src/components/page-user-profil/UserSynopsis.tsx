/* eslint-disable @typescript-eslint/no-explicit-any */
import UserNoteStars from '../ui/UserNoteStars';
import PictureUser from '../header/PictureUser';
import ButtonModifyProfile from './ButtonModifyProfile';
import UserAboutDetails from './aboutTab/UserAboutDetails';

type Props = {
  vendeur: boolean;
  photoUrl: string;
  login: string;
  evaluations: number;
  stars: number;
};

const UserSynopsis = ({
  vendeur,
  photoUrl,
  login,
  evaluations,
  stars,
}: Props) => {
  return (
    <div className="mb-16 flex flex-col justify-center gap-4 md:flex-row md:justify-around">
      <div className="mx-auto h-24 w-24 md:h-48 md:w-48">
        <PictureUser photoUrl={photoUrl} />
      </div>
      <div className="flex grow flex-col justify-start gap-4 md:flex-row">
        <div className="">
          <h1 className="font-semibold">{login}</h1>
          <div className="flex space-x-2">
            <UserNoteStars note={stars} />
            <span>{evaluations} évaluations</span>
          </div>
          <h2 className="mt-6 text-sm">A propos</h2>
          <UserAboutDetails google={false} />
        </div>
        <div className='mx-auto'>
        {!vendeur && <ButtonModifyProfile />}
        </div>
      </div>
    </div>
  );
};

export default UserSynopsis;
