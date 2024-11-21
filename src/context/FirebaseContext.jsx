// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { firebaseConfig } from "../firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

const FirebaseContext = createContext();

function FirebaseProvider ({children}) {

    async function addEmployee (employee) {
        const res = await addDoc(collection(firestore, 'add-employee'), employee )
        console.log(res)
    }
    return (
        <FirebaseContext.Provider value={{app, addEmployee, firestore}} >
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider

export function useFirebaseContext () {
    const context = useContext(FirebaseContext);
    if (context === undefined) throw new Error('Firebase context was used outside of its provider');
    return context;
}