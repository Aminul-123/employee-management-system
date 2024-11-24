// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import { getFirestore, addDoc, collection , query, getDocs} from "firebase/firestore";
import { firebaseConfig } from "../firebase";


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const FirebaseContext = createContext();

function FirebaseProvider ({children}) {

    const [data, setData] = useState([]);
    const [err, setErr] = useState('')
    
  
        useEffect(() => {
          async function getAllEmployee () {
            try {
              const collectionRef = collection(firestore, 'add-employee');
              const q = query(collectionRef)
              const snap = await getDocs(q);
              if (!snap) throw new Error('No Employee data found☹🙁')
               setData(snap.docs.map((elem) => ({...elem.data(), ID : elem.id})))
              //ID -> id of docs in database
            }
            catch(err) {
              // alert(err.message)
              setErr(err.message)
            }
          }
          getAllEmployee()
        }, [data?.length])
// console.log(data.map((elem) => elem.ID))
 

    async function addEmployee (employee) {
        const res = await addDoc(collection(firestore, 'add-employee'), employee )
      //  console.log(res)
    }
    return (
        <FirebaseContext.Provider value={{app, addEmployee, firestore , data, err}} >
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