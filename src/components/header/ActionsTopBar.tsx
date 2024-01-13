import logoHelp from '@/assets/icon-help.png';

export const ActionsTopBar: () => JSX.Element = () => {
  return (
    <div className="space-x-3 ">
      <button
        id="connexion"
        className="border-2 border-vintedGreen rounded p-1 text-sm text-vintedGreen hover:bg-vintedBackgroundCard"
      >
        S'inscrire | Se connecter
      </button>
      <button
        id="sell"
        className="bg-vintedGreen text-white text-sm pl-2 pr-2 pt-1 pb-1 rounded"
      >
        Vends tes articles
      </button>
      <img
        src={logoHelp}
        alt="Aide"
        className="object-contain h-6 w-6 inline-block hover:cursor-pointer"
      />
      <select
        name="language"
        id="langage"
        className=" w-12 relative origin-top-left  hover:cursor-pointer"
        defaultValue={'FR'}
      >
        {/* Modifier les options pour quelles apparaissent comme sur le site vinted */}
        <option value="fr">FR</option>
        <option value="en">English (English)</option>
        <option value="es">Espagnol (Spanish)</option>
        <option value="ne">Nederlands (Dutch)</option>
      </select>
    </div>
  );
};
