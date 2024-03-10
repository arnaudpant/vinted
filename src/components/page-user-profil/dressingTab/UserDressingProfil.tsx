import UserReview from './UserReview';
import UserAboutDetails from '../aboutTab/UserAboutDetails';
import CardsProductWithAvatar from '@/components/ui/CardsProductWithAvatar';

const UserDressingProfil: React.FC = () => {
 
  return (
    
    <div className=" mt-2 flex flex-col">
      <div className="sm:hidden">
        <UserReview />
        <hr className="my-4" />
          <UserAboutDetails
            google={true}
          />
      </div>
      <CardsProductWithAvatar />
    </div>
  );
};

export default UserDressingProfil;
