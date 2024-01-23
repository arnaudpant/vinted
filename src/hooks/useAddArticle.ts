import { ArticleForSale } from "@/types/types";
import useFirebaseAuth from "./useFirebaseAuth";
import { FirestoreUpdateDocument } from "@/firebase/firestore";

const useAddArticle = () => {
    const { authUser } = useFirebaseAuth()


    const addNewArticleInFirestore = async (listArticlesForSale: ArticleForSale[]) => {

        if (authUser) {
            const { error } = await FirestoreUpdateDocument("users", authUser.uid, {
                ...authUser.userDocument,
                listArticlesForSale,
            });
            if (error) {
                console.error(error.message, { autoClose: 3000 });
                return;
            }
        }
    }

    const addArticleToSell = (article: ArticleForSale) => {
        if (authUser?.userDocument){
            // 1 Recuperer tous les articles
            const getListAllArticlesToSell: ArticleForSale[] = authUser?.userDocument?.listArticlesForSale
            // 2 Ajouter le nouvel article a la liste
            const newListArticlesToSell: ArticleForSale[] = [...getListAllArticlesToSell, article]
            // 3 Envoyer le nouveau array d'articles dans firestore
            addNewArticleInFirestore(newListArticlesToSell)
        }
    };
    
    
    
    return { addArticleToSell };
};

export default useAddArticle;