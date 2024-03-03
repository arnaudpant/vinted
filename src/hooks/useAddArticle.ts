/* eslint-disable @typescript-eslint/no-floating-promises */
import { ArticleForSale } from "@/types/types";
import useFirebaseAuth from "./useFirebaseAuth";
import { FirestoreUpdateDocument } from "@/firebase/firestore";
import { useState } from "react";
import useFirestoreData from "./useFirestoreData";

/**
 * HOOK pour envoyer un article dans la base de données firestore
 * @returns addArticleToSell
 */


const useAddArticle = () => {
    const { authUser } = useFirebaseAuth()
    const {listArticles} = useFirestoreData()
    const [isLoadingAddArticle, setIsLoadingAddArticle] = useState<boolean>(false)


    const addNewArticleInFirestore = async (listArticlesForSale: ArticleForSale[], fullListArticlesForSale: ArticleForSale[]) => {
        // Ajout dans la liste des articles du user
        if (authUser) {
            const { error } = await FirestoreUpdateDocument("users", authUser.uid, {
                ...authUser.userDocument,
                listArticlesForSale,
            });
            if (error) {
                console.log("Error FirestoreUpdateDocument", error.message);
                setIsLoadingAddArticle(false)
                return;
            }
        }
        // Ajout dans liste des articles complete
        if (listArticles) {
            const { error } = await FirestoreUpdateDocument("collection-articles", "documents-articles", {
                fullListArticlesForSale
            });
            if (error) {
                console.log("Error FirestoreUpdateDocument list articles", error.message);
                setIsLoadingAddArticle(false)
                return;
            }
        }
        setIsLoadingAddArticle(false)
    }





    const addArticleToSell =  (article: ArticleForSale) => {
        setIsLoadingAddArticle(true)
        if (authUser?.userDocument) {
            // 1 Recuperer tous les articles (user)
            const getListAllArticlesToSellFromUser: ArticleForSale[] = authUser?.userDocument?.listArticlesForSale
            // 2 Ajouter le nouvel article a la liste (user)
            const newListArticlesToSellFromUser: ArticleForSale[] = [...getListAllArticlesToSellFromUser, article]
            
            if (listArticles?.fullListArticlesForSale) {
                const getListFulLArticlesToSell: ArticleForSale[] = listArticles.fullListArticlesForSale
                const newListFullArticlesFromAllUsers: ArticleForSale[] = [...getListFulLArticlesToSell, article]
                // 5 Envoyer le nouveau array d'articles dans firestore
                addNewArticleInFirestore(newListArticlesToSellFromUser, newListFullArticlesFromAllUsers)
            }
            
        }
    };

    return { addArticleToSell, isLoadingAddArticle };
};

export default useAddArticle;