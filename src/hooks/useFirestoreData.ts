/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { db } from "@/firebase/firebase-config"
import { ArticlesInterface} from "@/types/types"
import { doc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"

/**
 * 
 * @returns  authUser pour récupérer toutes les datas du l'utilisateur connecté,
        getUserDocument pour recuperer en temps reel les modifs dans db firestore
 */

const useFirestoreData = () => {
    const [listArticles, setListArticles] = useState<ArticlesInterface>()

    /** 
       * Ecouteur de Firebase pour user connecté ou non connecté
       * De base ne return que les données primaires => formatage
       */
    useEffect(() => {
        getListArticle()
    }, [])


    const getListArticle = async () => {
        const documentRef = doc(db, "collection-articles", "documents-articles")
        onSnapshot(documentRef, async (doc) => {
            if (doc.exists()) {
                const dataFromFirestore = doc.data() as ArticlesInterface
                setListArticles(dataFromFirestore)
            }
        })
    }


    return {
        listArticles,
        getListArticle
    }
}

export default useFirestoreData;