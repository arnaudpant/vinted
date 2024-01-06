export const HeaderBarSearch = () => {
  return (
    <div>
      <form
        action=""
        className="flex flex-grow-1 h-8 my-2 text-vintedTextGrisFonce bg-green-200 min-w-24  "
      >
        <select
          name="searchSelector"
          id="searchSelector"
          className="  w-fit rounded-g  pl-1 bg-vintedBackgroundCard"
        >
          <option value="articles">Articles</option>
          <option value="members">Membres</option>
          <option value="forum">Forum</option>
          <option value="help">Centre d'aide</option>
        </select>
        <input
          type="text"
          placeholder="Rechercher des articles"
          className=" w pl-2  rounded-r  w-full bg-vintedBackgroundCard flex flex-grow-1 md:mr-1 md:flex md:flex-grow  "
        />
      </form>
    </div>
  );
};

// Test Omid
