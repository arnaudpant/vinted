/* eslint-disable @typescript-eslint/no-explicit-any */

const ButtonReseaux = ({children}: any) => {
    return (
      <button
        type="button"
        className="mt-2 flex h-11 w-full cursor-not-allowed items-center justify-center rounded border border-solid border-vintedTextGrisClair"
        disabled={true}
      >
        {children}
      </button>
    );
};

export default ButtonReseaux;