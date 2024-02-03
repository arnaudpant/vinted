import UserSynopsis from './UserSynopsis';
import UserTabs from './UserTabs';

const UserProfil = (): JSX.Element => {
  return (
    <div className="mx-4 sm:mx-8">
      <UserSynopsis />
      <UserTabs />
    </div>
  );
};

export default UserProfil;
