import { Pen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ButtonModifyProfile = () => {
  const navigate = useNavigate();
  return (
    <button
      className="flex h-9 w-52 cursor-pointer items-center gap-2 rounded border border-vintedGreen px-[14px] text-vintedGreen"
      onClick={() => navigate('/settings/profile')}
    >
      <Pen />
      Modifier mon profil
    </button>
  );
};

export default ButtonModifyProfile;
