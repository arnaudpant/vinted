
import { ArticleForSale } from '@/types/types';
import { Plus } from 'lucide-react';
import { UseFormHandleSubmit } from 'react-hook-form';

type Props = {
  handleSubmit: UseFormHandleSubmit<ArticleForSale>;
  onSubmit: (data: ArticleForSale) => void;
};

const NewArticleForm = ({ handleSubmit, onSubmit }: Props) => {
  return (
    <section className="bg-vintedBackgroundCard pt-5">
      <div className="flex flex-col items-center container mx-auto max-w-[960px]">
        <div className="w-full py-4">
          <h1 className="text-2xl text-left">Vends ton article</h1>
        </div>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-vintedBackground">
            <p className="text-sm text-vintedTextBlackVar font-light pt-6 px-6 pb-2">
              Ajoute jusqu'a 20 photos.{' '}
              <span className="text-vintedGreen underline">Voir Astuces.</span>
            </p>
            <div className="p-6">
              <div className="flex items-center justify-center border border-dashed min-h-36 rounded">
                <button className="flex h-[42px] px-[14px] items-center border border-vintedGreen text-vintedGreen rounded">
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
                  className="w-full pb-1 border-b"
                  placeholder="ex: Chemise sésame verte"
                  id="titleArticle"
                />
                {errors.titleArticle && <span>Entrez un titre</span>}
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
                  className="w-full h-28 border-b"
                  placeholder="ex: porté quelques fois, taille correctement"
                  id="description"
                />
                {errors.descriptionArticle && (
                  <span>Entrez une description</span>
                )}
              </div>
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="bg-vintedBackground mt-6">
            <div className="flex flex-wrap p-6">
              <div className="w-full md:w-1/2">
                <label>Catégorie</label>
              </div>
              <div className="w-full md:w-1/2">
                <select
                  {...register('category', { required: true })}
                  className="w-full border-b text-vintedTextGrisFonce"
                >
                  <option value="" disabled>
                    Sélectionne une catégorie
                  </option>
                  <option value="femmes">Femmes</option>
                  <option value="hommes">Hommes</option>
                  <option value="enfants">Enfants</option>
                  <option value="maison">Maison</option>
                  <option value="divertissement">Divertissement</option>
                  <option value="animaux">Animaux</option>
                </select>
                {errors.category && <span>Choississez une catégorie</span>}
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
                  className="w-full border-b"
                  placeholder="0,00€"
                  id="prix"
                />
                {errors.price && <span>Ce champ est requis</span>}
              </div>
            </div>
          </div>

          <div className="bg-vintedBackground mt-6">
            <div className="flex justify-between p-6">
              <p>
                Que penses-tu de notre procédure pour ajouter de nouveaux
                articles ?
              </p>
              <button className="flex h-[42px] px-[14px] items-center border border-vintedGreen text-vintedGreen rounded">
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
          <div className="flex justify-end gap-4 mt-11 pb-5 mb-8">
            <button className="flex h-[42px] px-[14px] items-center border border-vintedGreen text-vintedGreen rounded">
              Sauvegarder le brouillon
            </button>
            <button
              type="submit"
              className="flex h-[42px] px-[14px] items-center bg-vintedGreen text-vintedBackground rounded"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewArticleForm;
