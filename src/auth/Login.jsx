import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/FirebaseAuthProvider';

function Login() {
  const {handleSignUp, handleSignIn} = useContext(AuthContext);
  const [email, setEmail]  = useState('');
  const [password, setPassword] = useState('');
  const [showLogin , setShowLogin] = useState(false)

 async function handleSignUpSubmit (e) {
  try {

    e.preventDefault();
    await handleSignUp(email, password);
   
     } catch (err) {
    console.log(err)
   }
  }
  function handleShowLogin () {
    setShowLogin(true);
  }
  function handleShowSignUp () {
    setShowLogin(false)
  }

  async function handleLoginSubmit (e) {
    try {

      e.preventDefault()
      await handleSignIn(email, password);

    } catch (err) {
      console.log(err);
    }

  }
  return (
    <>

    
    <form className='login-form'>
        <h2> {showLogin ? 'Login' : 'Signup'} </h2>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' required 
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" required 
             onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <p>Already <span>{showLogin ?  'logged in': 'signup' }? </span> {showLogin ? <span
        onClick={handleShowSignUp}
        className='auth-option'
        >
          {/* should open signup */}
          SignUp
        </span> : <span onClick={handleShowLogin}
        className='auth-option'>
          {/* should open login */}
          login
        </span> } </p>
        {
          showLogin ? (
            <button onClick={handleLoginSubmit} className='sign-btn' >Login</button>
          ) : (
            <button onClick={handleSignUpSubmit} className='sign-btn' >Signup</button>

          )
        }
    </form>
    </>
  )
}

export default Login