import { ArticleForSale } from "@/types/types";
import useFirebaseAuth from "./useFirebaseAuth";
import { FirestoreUpdateDocument } from "@/firebase/firestore";

const useAddArticle = () => {
    const { authUser } = useFirebaseAuth()


    const addNewArticleInFirestore = async (newListArticlesToSell: ArticleForSale[]) => {

        if (authUser) {
            const { error } = await FirestoreUpdateDocument("users", authUser.uid, {
                ...authUser.userDocument,
                newListArticlesToSell,
            });
            if (error) {
                console.error(error.message, { autoClose: 3000 });
                return;
            }
        }
    }

    const addArticleToSell = (article: ArticleForSale) => {
        if (authUser?.userDocument){
            const listAllArticlesToSell: ArticleForSale[] = authUser?.userDocument?.listArticlesForSale
            const newListArticlesToSell: ArticleForSale[] = [...listAllArticlesToSell, article]
            console.log('addArticleToSell', newListArticlesToSell)
            addNewArticleInFirestore(newListArticlesToSell)
        } else {
            addNewArticleInFirestore([article])
        }
    };
    
    
    
    return { addArticleToSell };
};

export default useAddArticle;