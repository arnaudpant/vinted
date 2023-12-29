/**
 * CREATION D'UN NOUVEAU COMPTE
 * Creation du user
 */

import { FirebaseError } from "firebase/app"
import { auth } from "../firebase/firebase-config"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth"


/**
 * CREATION d'UN COMPTE
 */
export const firebaseCreateUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return {
            data: userCredential.user
        }
    } catch (error) {
        const firebaseError = error as FirebaseError
        const errorMessage = firebaseError.code
        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
            }
        }
    }
}

/**
* CONNEXION A UN COMPTE
*/

export const firebaseSignInUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return {
            data: userCredential.user
        }
    } catch (error) {
        const firebaseError = error as FirebaseError
        const errorMessage = firebaseError.code

        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
            }
        }
    }
}

/**
 * DECONNEXION D'UN COMPTE
 */
export const firebaseSignOutUser = async () => {
    try {
        await signOut(auth)
        return {
            data: true
        }
    } catch (error) {
        const firebaseError = error as FirebaseError
        const errorMessage = firebaseError.code
        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
            }
        }
    }
}

/**
 * RECUPERATION D'UN EMAIL
 */
export const sendEmailToResetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email)
        return {
            data: true
        }
    } catch (error) {
        const firebaseError = error as FirebaseError
        const errorMessage = firebaseError.code
        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
            }
        }
    }
}