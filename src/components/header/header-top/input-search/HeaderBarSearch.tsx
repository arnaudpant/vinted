const HeaderBarSearch = () => {
  return (
    <form
      action=""
      className="mx-3 my-2 flex h-8 grow text-vintedTextGrisFonce xl:max-w-[800px] xl:grow-[1] "
    >
      <select
        name="searchSelector"
        id="searchSelector"
        className="cursor-pointer rounded-l bg-vintedBackgroundCard pl-1"
      >
        <option value="articles">Articles</option>
        <option value="members">Membres</option>
        {/* <option value="forum">Forum</option>
        <option value="help">Centre d&apos;aide</option> */}
      </select>
      <input
        type="text"
        placeholder="Rechercher"
        className=" w-full rounded-r bg-vintedBackgroundCard pl-2  "
      />
    </form>
  );
};

export default HeaderBarSearch;
