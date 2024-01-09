import { LABEL_CLASSNAME } from './constants';
import { LinkLabel } from '@/types/types';

type FooterSectionItemProps = {
  label: string;
  linkLabels: LinkLabel[];
};

const FooterSectionItem = ({ label, linkLabels }: FooterSectionItemProps) => {
  return (
    <li className="p-3">
      <span className="text-lg">{label}</span>
      <ul>
        {linkLabels.map((linkLabel) => (
          <li key={linkLabel} className="my-3">
            <span className={LABEL_CLASSNAME}>{linkLabel}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default FooterSectionItem;
