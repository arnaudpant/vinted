/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { auth, db } from "@/firebase/firebase-config"
import { UserDocument, UserInterface } from "@/types/types"
import { onAuthStateChanged, User } from "firebase/auth"
import { doc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"

/**
 * 
 * @returns  authUser pour récupérer toutes les datas du l'utilisateur connecté,
        getUserDocument pour recuperer en temps reel les modifs dans db firestore
 */

const useFirebaseAuth = () => {
    const [authUser, setAuthUser] = useState<UserInterface | null>(null)
    const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true)

    /** 
       * Ecouteur de Firebase pour user connecté ou non connecté
       * De base ne return que les données primaires => formatage
       */
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, authSateChanged)
        // authSateChanged remplace la function de base qui return les données primaires du user connecté
        // du type: (auth, (user)=> {...})
        return () => unsubscribe()
    }, [])

    /**
        * Function envoyée depuis useEffect via onAuthStateChanged de Firebase
        * Si non connecté return
        * Si connecté return infos primaires de user
        */
    const authSateChanged = async (authState: UserInterface | User | null) => {
        // authState = user dans function de base de Firebase (auth, (user)=> {...})
        /*
         * USER IS NOT CONNECT:
         * => user = null + Arret du loading ==> user non connecté
         */
        if (!authState) {
            setAuthUser(null)
            setAuthUserIsLoading(false)
            return
        }

        /**
         * USER IS CONNECT:
         * user = true ==> user non connecté
         */
        setAuthUserIsLoading(true)
        // Formatage des données primaires récupérées:
        const formatedUser = formatAuthUser(authState)
        // Insertion des données de Firestore dans le user avec données primaires
        await getUserDocument(formatedUser)
        setAuthUserIsLoading(false)
    }

    /** 4
        * Formatage des données primaires de user ou authState
        */
    const formatAuthUser = (user: UserInterface) => ({
        // ici user = données primaires return si connecté
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL
    })



    /** 5
     * Insertion des données de la base de donnée Firestore dans le user
     */
    const getUserDocument = async (user: UserInterface) => {
        // ici user = user formaté avec données primaires + userDocument
        if (auth.currentUser) {
            // Recuperation des données de Firestore
            const documentRef = doc(db, "users", auth.currentUser.uid)
            const compactUser = user
            // Ecouteur onSnapshot pour recuperer en temps reel les modifs dans db firestore
            onSnapshot(documentRef, async (doc) => {
                if (doc.exists()) {
                    compactUser.userDocument = doc.data() as UserDocument
                }
                setAuthUser((prevAuthUser) => (
                    { ...prevAuthUser, ...compactUser }
                ))
            })
        }
    }

    



    return {
        authUser,
        authUserIsLoading,
        getUserDocument,
    }
}

export default useFirebaseAuth;