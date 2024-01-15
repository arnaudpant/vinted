
const ButtonReseaux = ({children}: any) => {
    return (
      <button
        type="button"
        className="h-11 w-full flex justify-center items-center border border-solid border-vintedTextGrisClair rounded mt-2 cursor-not-allowed"
        disabled={true}
      >
        {children}
      </button>
    );
};

export default ButtonReseaux;