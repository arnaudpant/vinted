import PictureUser from '@/components/header/PictureUser';
import UserNoteStars from '@/components/ui/UserNoteStars';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import getRandomIndex from '@/utils/Utils';

const UserReview: React.FC = () => {
  const { authUser } = useFirebaseAuth();
  return (
    <div className="flex items-center space-x-3">
      <PictureUser
        photoUrl={authUser?.userDocument?.photoURL}
        pictureSize={48}
      />

      <div className="w-fit leading-tight">
        <h1>{authUser?.userDocument?.login}</h1>
        <div className="flex">
          <UserNoteStars note={4} />
          <span className="ml-2">{getRandomIndex(1, 20)}avis</span>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
