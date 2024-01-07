export const HeaderBarSearch = () => {
  return (
    <form
      action=""
      className="flex my-2 flex-grow mx-3 h-8  text-vintedTextGrisFonce xl: flex xl:flex-grow-1 xl:max-w-[800px] "
    >
      <select
        name="searchSelector"
        id="searchSelector"
        className="  rounded-l pl-1 bg-vintedBackgroundCard"
      >
        <option value="articles">Articles</option>
        <option value="members">Membres</option>
        <option value="forum">Forum</option>
        <option value="help">Centre d'aide</option>
      </select>
      <input
        type="text"
        placeholder="Rechercher des articles"
        className=" pl-2 rounded-r w-full bg-vintedBackgroundCard  "
      />
    </form>
  );
};

// Test Omid
