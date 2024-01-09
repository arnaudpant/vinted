import { LABEL_CLASSNAME } from './constants';
import { LinkLabel } from '@/types/types';

const FooterPrivacySection = () => {
  const linkLabels: LinkLabel[] = [
    'Politique de Confidentialité',
    'Politique de cookies',
    'Paramètres des cookies',
    'Termes et Conditions',
    'Notre plateforme',
    'Conditions de vente Pro',
    "Conditions d'utilisation Pro",
  ];
  return (
    <ul className="flex flex-wrap">
      {linkLabels.map((linkLabel) => (
        <li className="m-0 p-3" key={linkLabel}>
          <span className={LABEL_CLASSNAME}>{linkLabel}</span>
        </li>
      ))}
    </ul>
  );
};

export default FooterPrivacySection;
