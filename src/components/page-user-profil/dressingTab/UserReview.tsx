import PictureUser from '@/components/header/PictureUser';
import UserNoteStars from '@/components/ui/UserNoteStars';
import { useAuth } from '@/context/AuthUserContext';

const UserReview: React.FC = () => {
  const { authUser } = useAuth();
  return (
    <div className="flex items-center space-x-3">
      <div className='h-12 w-12'>
      <PictureUser
        photoUrl={authUser?.userDocument?.photoURL}
      />
      </div>

      <div className="w-fit leading-tight">
        <h1>{authUser?.userDocument?.login}</h1>
        <div className="flex">
          <UserNoteStars note={authUser?.userDocument?.stars ?? 0} />
          <span className="ml-2">{authUser?.userDocument?.evaluations} avis</span>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
