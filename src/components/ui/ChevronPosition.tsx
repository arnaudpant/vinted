import { ScrollAction } from '@/types/types';
import { ChevronRight, ChevronLeft } from 'lucide-react';

type Props = {
  scrollCards: ScrollAction;
  handleClicRight: () => void;
  handleClicLeft: () => void;
};

const ChevronPosition = ({
  scrollCards,
  handleClicRight,
  handleClicLeft,
}: Props) => {
  const styleDiv =
    `absolute top-5 flex items-center justify-center h-8 w-8 rounded-full bg-gray-600 opacity-40 cursor-pointer`;

  if (scrollCards === 'left') {
    return (
      <button className={`${styleDiv} right-2`} onClick={handleClicRight}>
        <ChevronRight className="text-vintedBackground" />
      </button>
    );
  }
  if (scrollCards === 'right') {
    return (
      <button className={`${styleDiv} left-2`} onClick={handleClicLeft}>
        <ChevronLeft className="text-vintedBackground" />
      </button>
    );
  }
  if (scrollCards === 'both') {
    return (
      <>
        <button className={`${styleDiv} right-2`} onClick={handleClicRight}>
          <ChevronRight className="text-vintedBackground" />
        </button>
        <button className={`${styleDiv} left-2`} onClick={handleClicLeft}>
          <ChevronLeft className="text-vintedBackground" />
        </button>
      </>
    );
  }

  return <></>;
};

export default ChevronPosition;
