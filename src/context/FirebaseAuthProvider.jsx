import { createContext, useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

 export const AuthContext = createContext();

export  const auth = getAuth();

function FirebaseAuthProvider ({children}) {
    const [user, setUser] = useState(null)

    async function handleSignUp (email, password) {
          try {

            await createUserWithEmailAndPassword(auth, email, password)
            .then((val) => {
                alert(`WELCOME || SIGNUP SUCCESSFULL`);
            })
            .catch((err) => alert(`There is an error in Signup : ${err}`))
        } 
        catch (error) {
            console.log(error.message)
        }
    }

    async function handleSignIn (email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            .then((val) => {
                alert('WELCOME BACK || LOGIN SUCCESSFULL');
            })
            .catch((err) => {
                throw new Error(err)
            })
        } catch (err) {
            alert(err.message);
        }
    }


    useEffect(() => {
        onAuthStateChanged(auth, (_user) => {
            if (_user) setUser(_user) ;
            else setUser(null);
        }) 
    }, [])


    return <AuthContext.Provider  value={{
        handleSignUp, handleSignIn, user
    }}>
        {children}
    </AuthContext.Provider>
}
export default FirebaseAuthProvider;