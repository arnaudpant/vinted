import React from 'react';
import logoVinted from '../assets/logoVinted.svg';
import logoHelp from '../assets/icon-help.png';
const TopHeader: () => JSX.Element = () => {
  return (
    <header className="flex h-12  items-center justify-center space-x-4">
      <img src={logoVinted} alt="logo" />
      <form action="" className="">
        <select
          name="searchSelector"
          id="searchSelector"
          className="bg-gray-100 h-8 w-20 rounded-g text-gray-700 pl-1"
        >
          <option value="articles">Articles</option>
          <option value="members">Membres</option>
          <option value="forum">Forum</option>
          <option value="help">Centre d'aide</option>
        </select>
        <input
          type="text"
          placeholder="Rechercher des articles"
          className="h-8 w-96 px-4 bg-gray-100 rounded-r"
        />
      </form>
      <button
        id="connexion"
        className="border-2 border-green-800 rounded p-1 text-sm text-green-800 hover:bg-slate-50"
      >
        S'inscrire | Se connecter
      </button>
      <button
        id="sell"
        className="bg-green-800 text-white text-sm pl-2 pr-2 pt-1 pb-1 rounded"
      >
        Vends tes articles
      </button>
      <img src={logoHelp} alt="Aide" className="object-contain h-6 w-6 " />
      <select name="language" id="langage" className=" w-12">
        <option value="fr">FR</option>
        <option value="en">English (English)</option>
        <option value="es">Espagnol (Spanish)</option>
        <option value="ne">Nederlands (Dutch)</option>
      </select>
    </header>
  );
};

export default TopHeader;
