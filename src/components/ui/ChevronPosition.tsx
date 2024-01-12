import { ChevronRight, ChevronLeft } from 'lucide-react';

type Props = {
  scrollCards: 'left' | 'right' | 'both';
  handleClicRight: () => void;
  handleClicLeft: () => void;
};

const ChevronPosition = ({
  scrollCards,
  handleClicRight,
  handleClicLeft,
}: Props) => {
  const styleDiv =
    'absolute top-5 flex items-center justify-center h-8 w-8 rounded-full bg-gray-600 opacity-40 cursor-pointe';
  return (
    <>
      {scrollCards === 'left' ? (
        <div
          className={`${styleDiv} right-2`}
          onClick={handleClicRight}
          role="button"
        >
          <ChevronRight className="text-vintedBackground" />
        </div>
      ) : scrollCards === 'right' ? (
        <div
          className={`${styleDiv} left-2`}
          onClick={handleClicLeft}
          role="button"
        >
          <ChevronLeft className="text-vintedBackground" />
        </div>
      ) : scrollCards === 'both' ? (
        <>
          <div
            className={`${styleDiv} right-2`}
            onClick={handleClicRight}
            role="button"
          >
            <ChevronRight className="text-vintedBackground" />
          </div>
          <div
            className={`${styleDiv} left-2`}
            onClick={handleClicLeft}
            role="button"
          >
            <ChevronLeft className="text-vintedBackground" />
          </div>
        </>
      ) : null}
    </>
  );
};

export default ChevronPosition;
