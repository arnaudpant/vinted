import UserAboutDescription from './UserAboutDescription';
import UserAboutStatistics from './UserAboutStatistics';
import UserAboutInfos from './UserAboutInfos';
import UserAboutDetails from './UserAboutDetails';
import ButtonsContact from '../models/ButtonsContact';

const UserAboutTab: React.FC = () => {
  return (
    <div className="mx-4">
      <UserAboutDescription />
      <hr className="my-4" />
      <UserAboutStatistics />
      <hr className="my-4" />
      <UserAboutInfos />
      <hr className="my-4" />
      <UserAboutDetails />
      <hr className="my-4" />
      <ButtonsContact />
      <hr className="my-4" />
    </div>
  );
};

export default UserAboutTab;
