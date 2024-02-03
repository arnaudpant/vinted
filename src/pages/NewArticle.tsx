import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import ModalAuth from '@/components/modals/authentification/ModalAuth';
import FormAddArticle from '@/components/form-add-article/FormAddArticle';


const NewArticle = () => {
  const { authUser } = useFirebaseAuth();


  return (
    <section className="bg-vintedBackgroundCard pt-5">
      {!authUser ? <ModalAuth setModalConnexion={()=>{}} /> : <FormAddArticle />}
    </section>
  );
                  }

export default NewArticle;
