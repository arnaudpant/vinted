import React from 'react';

const ButtonTopHeader: React.FC<{
  children: string;
  mainColor: string;
  textColor: string;
  handleFunction?: () => void;
}> = ({ children, mainColor, textColor, handleFunction }) => {
  return (
    <button
      onClick={handleFunction}
      className={`border-2 nd border-vintedGreen rounded p-1 text-sm ${textColor} ${mainColor} hover:shadow-md `}
    >
      {children}
    </button>
  );
};

export default ButtonTopHeader;
