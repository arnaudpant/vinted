import UserNoteStars from '../ui/UserNoteStars';
import PictureUser from '../header/PictureUser';
import ButtonModifyProfile from './ButtonModifyProfile';
import UserInfoLine from './models/UserInfoLine';
import { CheckCircle} from 'lucide-react';
import UserAboutDetails from './aboutTab/UserAboutDetails';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';


const UserSynopsis = () => {
  const { authUser } = useFirebaseAuth()
  return (
    <div className="mb-16 hidden justify-center space-x-8 sm:flex sm:justify-around">
      <PictureUser photoUrl={authUser?.userDocument?.photoURL} pictureSize={200} />

      <div className="flex grow flex-col justify-between lg:flex-row">
        <div className="">
          <h1 className="font-semibold">{authUser?.userDocument?.login}</h1>
          <div className="flex space-x-2">
            <UserNoteStars note={authUser?.userDocument?.stars ?? 0} />
            <span>{authUser?.userDocument?.evaluations} évaluations</span>
          </div>
          <h2 className="mt-6 text-sm">A propos</h2>
          <UserAboutDetails google={false} />
        </div>
        <div className="my-6 lg:my-0">
          <h2 className="text-sm">Informations vérifiées</h2>
          <UserInfoLine ComponentPicture={<CheckCircle />}>Email</UserInfoLine>
        </div>
        <ButtonModifyProfile />
      </div>
    </div>
  );
};

export default UserSynopsis;
