/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { db } from "@/firebase/firebase-config"
import { ArticlesInterface} from "@/types/types"
import { doc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"


const useFirestoreData = () => {
    const [listArticles, setListArticles] = useState<ArticlesInterface>()
    

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