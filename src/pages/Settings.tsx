import ModalAuth from '../components/modals/authentification/ModalAuth';
import FormModifyProfile from '../components/page-modify-profile/FormModifyProfile';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthUserContext';

const PROFILE_SECTION = 'profile';

const Settings = () => {
  const { section } = useParams();
  const { authUser } = useAuth();
  let eltToDisplay;
  if (!authUser) {
    eltToDisplay = <ModalAuth setModalConnexion={() => {}} />;
  } else if (section === PROFILE_SECTION) {
    eltToDisplay = <FormModifyProfile />;
  } else {
    throw Error(`Unknown route /settings/${section}`);
  }

  return (
    <section className="bg-vintedBackgroundCard pt-5">{eltToDisplay}</section>
  );
};

export default Settings;
