/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ArticleForSale } from '@/types/types';
import { useForm } from 'react-hook-form';
import { Plus } from 'lucide-react';
import useAddArticle from '@/hooks/useAddArticle';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

type Props = {
  userId: string
};

const FormAddArticle = ({userId}: Props) => {
  const { addArticleToSell, isLoadingAddArticle } = useAddArticle();
  const navigate = useNavigate()

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<ArticleForSale>();

  const onSubmit = (data: ArticleForSale) => {
    const newArticle: ArticleForSale = {
      uid: nanoid(),
      photos: [],
      titleArticle: data.titleArticle,
      descriptionArticle: data.descriptionArticle,
      category: data.category,
      subCategory: data.subCategory,
      brandArticle: data.brandArticle,
      price: data.price,
      userId: userId,
    };
    addArticleToSell(newArticle);
    reset();
    navigate('/member/');
  };

  return (
    <div className="container mx-auto flex max-w-[960px] flex-col items-center px-2">
      <div className="w-full py-4">
        <h1 className="text-left text-2xl">Vends ton article</h1>
      </div>
      {/* FORMULAIRE */}
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-vintedBackground">
          <p className="px-6 pb-2 pt-6 text-sm font-light text-vintedTextBlackVar">
            Ajoute jusqu&apos;a 20 photos.{' '}
            <span className="text-vintedGreen underline">Voir Astuces.</span>
          </p>
          <div className="p-6">
            <div className="flex min-h-36 items-center justify-center rounded border border-dashed">
              <button
                className="flex h-[42px] cursor-not-allowed items-center rounded border border-vintedGreen px-[14px] text-vintedGreen"
                disabled
              >
                <Plus />
                Ajoute des photos
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-vintedBackground">
          {/* TITRE */}
          <div className="flex flex-wrap border-b p-6">
            <div className="w-full md:w-1/2">
              <label htmlFor="titleArticle">Titre</label>
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="text"
                {...register('titleArticle', { required: true })}
                className="w-full border-b pb-1 focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
                placeholder="ex: Chemise sésame verte"
                id="titleArticle"
              />
              {errors.titleArticle && (
                <span className="text-sm text-vintedGreen">
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
                className="h-28 w-full border-b focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
                placeholder="ex: porté quelques fois, taille correctement"
                id="description"
              />
              {errors.descriptionArticle && (
                <span className="text-sm text-vintedGreen">
                  Entrez une description
                </span>
              )}
            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="mt-6 bg-vintedBackground">
          <div className="flex flex-wrap p-6">
            <div className="w-full md:w-1/2">
              <label htmlFor="categories">Catégorie</label>
            </div>
            <div className="w-full md:w-1/2">
              <select
                {...register('category', { required: true })}
                className="w-full border-b text-vintedTextGrisFonce focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
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
                <span className="text-sm text-vintedGreen">
                  Choississez une catégorie
                </span>
              )}
            </div>
          </div>
        </div>

        {/* SOUS-CATEGORIES */}
        <div className="mt-6 bg-vintedBackground">
          <div className="flex flex-wrap p-6">
            <div className="w-full md:w-1/2">
              <label htmlFor="sub-categories">Sous catégorie</label>
            </div>
            <div className="w-full md:w-1/2">
              <select
                {...register('subCategory', { required: true })}
                className="w-full border-b text-vintedTextGrisFonce focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
                id="sub-categories"
              >
                <option hidden defaultValue="">
                  Sélectionne une sous-catégorie
                </option>
                <option value="vetements">Vetements</option>
                <option value="chaussures">Chaussures</option>
                <option value="fille">Fille</option>
                <option value="garcon">Garcon</option>
                <option value="textile">Textile</option>
                <option value="console">Jeux vidéos et consoles</option>
                <option value="puzzle">Jeux et Puzzles</option>
                <option value="chien">Chien</option>
                <option value="chat">Chat</option>
                <option value="other">Other</option>
              </select>
              {errors.category && (
                <span className="text-sm text-vintedGreen">
                  Choississez une sous-catégorie
                </span>
              )}
            </div>
          </div>
        </div>

        {/* MARQUE */}
        <div className="flex flex-wrap border-b p-6">
          <div className="w-full md:w-1/2">
            <label htmlFor="brandArticle">Marque</label>
          </div>
          <div className="w-full md:w-1/2">
            <input
              type="text"
              {...register('brandArticle', { required: true })}
              className="w-full border-b pb-1 focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
              placeholder="ex: Chemise sésame verte"
              id="titleArticle"
            />
            {errors.brandArticle && (
              <span className="text-sm text-vintedGreen">Entrez un titre</span>
            )}
          </div>
        </div>

        {/* PRIX */}
        <div className="mt-6 bg-vintedBackground">
          <div className="flex flex-wrap p-6">
            <div className="w-full md:w-1/2">
              <label htmlFor="prix">Prix</label>
            </div>
            <div className="w-full md:w-1/2">
              <input
                {...register('price', { required: true })}
                type="number"
                className="w-full border-b focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
                placeholder="0,00€"
                id="prix"
              />
              {errors.price && (
                <span className="text-sm text-vintedGreen">
                  Ce champ est requis
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-vintedBackground">
          <div className="flex items-center justify-between p-6">
            <p className="pr-2">
              Que penses-tu de notre procédure pour ajouter de nouveaux articles
              ?
            </p>
            <button className="h-[42px] min-w-36 rounded border border-vintedGreen px-[14px] text-vintedGreen">
              Donner un avis
            </button>
          </div>
        </div>
        <p className="p-4 text-[14px] text-vintedTextGrisFonce">
          Un vendeur professionnel se faisant passer pour un consommateur ou un
          non-professionnel sur Vinted encourt les sanctions prévues à l&apos;
          <span className="cursor-pointer text-vintedGreen underline">
            Article L. 132-2
          </span>{' '}
          du Code de la Consommation.
        </p>
        <div className="mb-8 mt-11 flex flex-col-reverse gap-4 pb-5 md:flex-row md:justify-end">
          <button className="h-[42px] rounded border border-vintedGreen px-[14px] text-center text-vintedGreen">
            Sauvegarder le brouillon
          </button>
          {isLoadingAddArticle ? (
            <button
              className="h-[42px] w-24 rounded bg-vintedGreen px-[14px] text-center text-vintedBackground"
              disabled
            >
              <svg
                className="animate-spin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path
                  d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                  opacity=".25"
                  fill="text-fond"
                />
                <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"></path>
              </svg>
            </button>
          ) : (
            <button
              type="submit"
              className="h-[42px] w-24 rounded bg-vintedGreen px-[14px] text-center text-vintedBackground"
              data-testid="ajouter"
            >
              Ajouter
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormAddArticle;
