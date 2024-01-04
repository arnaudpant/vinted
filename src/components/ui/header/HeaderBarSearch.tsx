import React from 'react';
import logoVinted from '../assets/logoVinted.svg';

export const HeaderBarSearch = () => {
  return (
    <div>
      <form
        action=""
        className="flex w-full mx-4 my-2 text-vintedTextGrisFonce  "
      >
        <select
          name="searchSelector"
          id="searchSelector"
          className=" h-8 w-fit rounded-g  pl-1 bg-vintedBackgroundCard"
        >
          <option value="articles">Articles</option>
          <option value="members">Membres</option>
          <option value="forum">Forum</option>
          <option value="help">Centre d'aide</option>
        </select>
        <input
          type="text"
          placeholder="Rechercher des articles"
          className="h-8 w px-2  rounded-r flex flex-grow mr-6 w-full bg-vintedBackgroundCard  md:mr-1 md:flex flex-grow  "
        />
      </form>
    </div>
  );
};

// Test Omid
