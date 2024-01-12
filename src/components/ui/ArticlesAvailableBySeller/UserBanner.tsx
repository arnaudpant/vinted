import PictureUser from './PictureUser';
import NoPictureUser from './NoPictureUser';

const UserBanner = () => {
  const isUserHaveProfilPicture = true;
  return (
    <div className="flex flex-row  justify-start  py-1 ml-2 cursor-pointer">
      <a className="flex flex-row flex-nowrap">
        <span className="mr-2">
          {isUserHaveProfilPicture ? <PictureUser /> : <NoPictureUser />}
        </span>
        <span>Alice Giovanola</span>
      </a>
    </div>
  );
};

export default UserBanner;
