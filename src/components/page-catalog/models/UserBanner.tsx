import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { Link } from 'react-router-dom';
import PictureUser from '../../header/PictureUser';

const UserBanner: React.FC = () => {
  const { authUser } = useFirebaseAuth();


  return (
    <div className="ml-2 flex  cursor-pointer  flex-row justify-start py-1">
      <Link
        to="/"
        className="flex flex-row flex-nowrap"
      >
        <span className="mr-2">
            <PictureUser
              avatarUser={authUser?.userDocument?.photoURL ?? ''}
              pictureSize={24}
            />
        </span>
        <span>{authUser?.userDocument?.login}</span>
      </Link>
    </div>
  );
};

export default UserBanner;
