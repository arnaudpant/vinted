import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalAuthView from './ModalAuthView';
import { useAuth } from '@/context/AuthUserContext';

type Props = {
  setModalConnexion: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalAuth = ({ setModalConnexion }: Props) => {
  const { authUser } = useAuth();

  const navigate = useNavigate();

  const handleClick = () => {
    setModalConnexion(false);
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  if (authUser) {
    return null;
  }

  return createPortal(
    <ModalAuthView
      handleClick={handleClick}
      setModalConnexion={setModalConnexion}
    />,
    document.body,
  );
};

export default ModalAuth;
