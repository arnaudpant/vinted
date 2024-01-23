const ButtonTopHeader: React.FC<{
  children: string;
  mainColor: string;
  textColor: string;
  handleFunction?: () => void;
}> = ({ children, mainColor, textColor, handleFunction }) => {
  return (
    <button
      onClick={handleFunction}
      className={`rounded border-2 border-vintedGreen p-1 text-sm ${textColor} ${mainColor} hover:shadow-md `}
    >
      {children}
    </button>
  );
};

export default ButtonTopHeader;
