const NewArticle = () => {
  return (
    <section className="bg-vintedBackgroundCard pt-5">
      <div className="flex flex-col items-center container mx-auto max-w-[960px]">
        <div className="w-full py-4">
          <h1 className="text-2xl text-left">Vends ton article</h1>
        </div>
        <form className="w-full">
          <div className="bg-vintedBackground">
            <p>
              Ajoute jusqu'a 20 photos. <span>Voir Astuces</span>
            </p>
            <div>
              <button>Ajoute des photos</button>
            </div>
          </div>

          <div className="bg-vintedBackground">
            <div>
              <label htmlFor=""></label>
              <input></input>
            </div>
            <div>
              <label htmlFor=""></label>
              <input></input>
            </div>
          </div>

          <div className="bg-vintedBackground">
            <div>
              <label htmlFor=""></label>
              <input></input>
            </div>
          </div>

          <div className="bg-vintedBackground">
            <div>
              <label htmlFor=""></label>
              <input></input>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewArticle;
