/* eslint-disable @typescript-eslint/no-floating-promises */
import { ArticleForSale } from "@/types/types";
import useFirebaseAuth from "./useFirebaseAuth";
import { FirestoreUpdateDocument } from "@/firebase/firestore";
import { useState } from "react";

/**
 * HOOK pour envoyer un article dans la base de données firestore
 * @returns addArticleToSell
 */


const useAddArticle = () => {
    const { authUser, listArticles } = useFirebaseAuth()
    const [isLoadingAddArticle, setIsLoadingAddArticle] = useState<boolean>(false)




    const addNewArticleInFirestore = async (listArticlesForSale: ArticleForSale[]) => {
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
            const { error } = await FirestoreUpdateDocument("articles", "list-articles", {
                ...listArticles,
                listArticlesForSale,
            });
            if (error) {
                console.log("Error FirestoreUpdateDocument list articles", error.message);
                setIsLoadingAddArticle(false)
                return;
            }
        }

        setIsLoadingAddArticle(false)
    }





    const addArticleToSell = (article: ArticleForSale) => {
        setIsLoadingAddArticle(true)
        if (authUser?.userDocument) {
            // 1 Recuperer tous les articles
            const getListAllArticlesToSell: ArticleForSale[] = authUser?.userDocument?.listArticlesForSale
            // 2 Ajouter le nouvel article a la liste
            const newListArticlesToSell: ArticleForSale[] = [...getListAllArticlesToSell, article]
            // 3 Envoyer le nouveau array d'articles dans firestore
            addNewArticleInFirestore(newListArticlesToSell)
        }
    };

    return { addArticleToSell, isLoadingAddArticle };
};

export default useAddArticle;