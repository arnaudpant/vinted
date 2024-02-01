import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { FirebaseError } from "firebase/app";



// eslint-disable-next-line import/prefer-default-export
export const FirestoreUpdateDocument = async (collectionName: string, documentId: string, data: object) => {
    try {
        const documentRef = doc(db, collectionName, documentId);
        await updateDoc(documentRef, data);
        return {
            data: true
        }
    } catch (error) {
        const firebaseError = error as FirebaseError
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        }
    }
}