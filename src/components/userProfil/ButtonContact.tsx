import React from 'react';

const ButtonContact: React.FC<{
  children: React.ReactNode;
  backgroundColor: string;
  textColor: string;
}> = ({ children, backgroundColor, textColor }) => {
  return (
    <button
      className={`w-2/5 ${backgroundColor} ${textColor} cursor-not-allowed rounded-sm border-2 border-vintedGreen py-1 sm:h-8 md:w-32`}
    >
      {children}
    </button>
  );
};

export default ButtonContact;
