// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2MBL5hcMtBi-utQ9Z7MDZvrwxQN4Ppm0",
  authDomain: "fir-employee-management-ccff0.firebaseapp.com",
  projectId: "fir-employee-management-ccff0",
  storageBucket: "fir-employee-management-ccff0.firebasestorage.app",
  messagingSenderId: "673275031734",
  appId: "1:673275031734:web:a573d963dc18a204efb617"
};

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
        <FirebaseContext.Provider value={{app, addEmployee}} >
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