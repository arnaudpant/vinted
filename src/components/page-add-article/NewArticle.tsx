import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import ModalAuth from '@/components/modals/authentification/ModalAuth';
import FormAddArticle from '@/components/page-add-article/FormAddArticle';


const NewArticle = () => {
  const { authUser } = useFirebaseAuth();
 
  return (
    <section className="bg-vintedBackgroundCard pt-5">
      {!authUser ? <ModalAuth setModalConnexion={()=>{}} /> : <FormAddArticle userId={authUser.uid} userPhoto={authUser.photoURL ?? ""} userLogin={authUser.userDocument?.login ?? ""} />}
    </section>
  );
                  }

export default NewArticle;
