import { db } from "@/firebase/firebase-config";
import { FirebaseError } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";


const FirestoreCreateDocument = async (collectionName: string, documentId: string, data: object) => {
    try {
        const documentRef = doc(db, collectionName, documentId);
        await setDoc(documentRef, data);
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

export default FirestoreCreateDocument