/**
 * CREATION D'UN NOUVEAU COMPTE
 * Creation du user
 */

import { FirebaseError } from "firebase/app"
import { auth } from "../firebase/firebase-config"
import { createUserWithEmailAndPassword } from "firebase/auth"

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