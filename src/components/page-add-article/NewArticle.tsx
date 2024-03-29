import ModalAuth from '@/components/modals/authentification/ModalAuth';
import FormAddArticle from '@/components/page-add-article/FormAddArticle';
import { useAuth } from '@/context/AuthUserContext';

const NewArticle = () => {
  const { authUser } = useAuth();

  return (
    <section className="bg-vintedBackgroundCard pt-5">
      {!authUser ? (
        <ModalAuth setModalConnexion={() => {}} />
      ) : (
        <FormAddArticle
          userId={authUser.uid}
          userPhoto={authUser.userDocument?.photoURL ?? ''}
          userLogin={authUser.userDocument?.login ?? ''}
          userStars={authUser.userDocument?.stars ?? 0}
          userEvaluations={authUser.userDocument?.evaluations ?? 0}
          userCity={authUser.userDocument?.city ?? ""}
        />
      )}
    </section>
  );
};

export default NewArticle;
