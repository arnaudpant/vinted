import { ArticleForSale } from '@/types/types';
import { useForm } from 'react-hook-form';
import { Plus } from 'lucide-react';
import useAddArticle from '@/hooks/useAddArticle';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import ModalAuth from '@/components/modals/authentification/ModalAuth';

const NewArticle = () => {
  const { addArticleToSell } = useAddArticle();
  const { authUser } = useFirebaseAuth()

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<ArticleForSale>();

  const onSubmit = (data: ArticleForSale) => {
    const newArticle: ArticleForSale = {
      photos: [],
      titleArticle: data.titleArticle,
      descriptionArticle: data.descriptionArticle,
      category: data.category,
      price: data.price,
    };
    console.log('newArticle', newArticle);
    addArticleToSell(newArticle);
  };

  return (
    <section className="bg-vintedBackgroundCard pt-5">
      {
        !authUser && <ModalAuth />
      }
      <div className="flex flex-col items-center container mx-auto px-2 max-w-[960px]">
        <div className="w-full py-4">
          <h1 className="text-2xl text-left">Vends ton article</h1>
        </div>
        {/* FORMULAIRE */}
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-vintedBackground">
            <p className="text-sm text-vintedTextBlackVar font-light pt-6 px-6 pb-2">
              Ajoute jusqu'a 20 photos.{' '}
              <span className="text-vintedGreen underline">Voir Astuces.</span>
            </p>
            <div className="p-6">
              <div className="flex items-center justify-center border border-dashed min-h-36 rounded">
                <button className="flex h-[42px] px-[14px] items-center border border-vintedGreen text-vintedGreen rounded cursor-not-allowed">
                  <Plus />
                  Ajoute des photos
                </button>
              </div>
            </div>
          </div>
          <div className="bg-vintedBackground mt-6">
            {/* TITRE */}
            <div className="flex flex-wrap p-6 border-b">
              <div className="w-full md:w-1/2">
                <label htmlFor="titleArticle">Titre</label>
              </div>
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  {...register('titleArticle', { required: true })}
                  className="w-full pb-1 border-b focus-visible:outline-none focus-visible:border-b focus-visible:border-vintedGreen"
                  placeholder="ex: Chemise sésame verte"
                  id="titleArticle"
                />
                {errors.titleArticle && (
                  <span className="text-vintedGreen text-sm">
                    Entrez un titre
                  </span>
                )}
              </div>
            </div>
            {/* DESCRIPTION */}
            <div className="flex flex-wrap p-6">
              <div className="w-full md:w-1/2">
                <label htmlFor="description">Décris ton article</label>
              </div>
              <div className="w-full md:w-1/2">
                <textarea
                  {...register('descriptionArticle', { required: true })}
                  className="w-full h-28 border-b focus-visible:outline-none focus-visible:border-b focus-visible:border-vintedGreen"
                  placeholder="ex: porté quelques fois, taille correctement"
                  id="description"
                />
                {errors.descriptionArticle && (
                  <span className="text-vintedGreen text-sm">
                    Entrez une description
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="bg-vintedBackground mt-6">
            <div className="flex flex-wrap p-6">
              <div className="w-full md:w-1/2">
                <label htmlFor="categories">Catégorie</label>
              </div>
              <div className="w-full md:w-1/2">
                <select
                  {...register('category', { required: true })}
                  className="w-full border-b text-vintedTextGrisFonce focus-visible:outline-none focus-visible:border-b focus-visible:border-vintedGreen"
                  id="categories"
                >
                  <option hidden defaultValue="">
                    Sélectionne une catégorie
                  </option>
                  <option value="femmes">Femmes</option>
                  <option value="hommes">Hommes</option>
                  <option value="enfants">Enfants</option>
                  <option value="maison">Maison</option>
                  <option value="divertissement">Divertissement</option>
                  <option value="animaux">Animaux</option>
                </select>
                {errors.category && (
                  <span className="text-vintedGreen text-sm">
                    Choississez une catégorie
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* PRIX */}
          <div className="bg-vintedBackground mt-6">
            <div className="flex flex-wrap p-6">
              <div className="w-full md:w-1/2">
                <label htmlFor="prix">Prix</label>
              </div>
              <div className="w-full md:w-1/2">
                <input
                  {...register('price', { required: true })}
                  type="number"
                  className="w-full border-b focus-visible:outline-none focus-visible:border-b focus-visible:border-vintedGreen"
                  placeholder="0,00€"
                  id="prix"
                />
                {errors.price && (
                  <span className="text-vintedGreen text-sm">
                    Ce champ est requis
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="bg-vintedBackground mt-6">
            <div className="flex justify-between items-center p-6">
              <p className='pr-2'>
                Que penses-tu de notre procédure pour ajouter de nouveaux
                articles ?
              </p>
              <button className="h-[42px] min-w-36 px-[14px] border border-vintedGreen text-vintedGreen rounded">
                Donner un avis
              </button>
            </div>
          </div>
          <p className="p-4 text-[14px] text-vintedTextGrisFonce">
            Un vendeur professionnel se faisant passer pour un consommateur ou
            un non-professionnel sur Vinted encourt les sanctions prévues à l'
            <span className="text-vintedGreen underline cursor-pointer">
              Article L. 132-2
            </span>{' '}
            du Code de la Consommation.
          </p>
          <div className="flex flex-col-reverse md:flex-row md:justify-end gap-4 mt-11 pb-5 mb-8">
            <button className="h-[42px] px-[14px] text-center border border-vintedGreen text-vintedGreen rounded">
              Sauvegarder le brouillon
            </button>
            <button
              type="submit"
              className="h-[42px] px-[14px] text-center bg-vintedGreen text-vintedBackground rounded"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewArticle;
