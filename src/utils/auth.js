import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signOut, sendPasswordResetEmail } from "firebase/auth"

const verifyLogin = (logoutRoutes, currentPath, navigate) => {
    const userIsLoggedIn = () => {
        const user = window.localStorage.getItem('user');
        if(user) return JSON.parse(user);
        return null;
      }
      const isLoggedIn  = userIsLoggedIn();

    if(isLoggedIn && logoutRoutes.includes(currentPath)){
        navigate('/')
      } else if(!isLoggedIn && !logoutRoutes.includes(currentPath)) {
        navigate('/login')
      }

      
}

const sendPasswordReset = async (firebaseApp, email) => {
  try {
    const auth =getAuth(firebaseApp);
    await sendPasswordResetEmail(auth, email);
    alert("E-mail enviado!");
  } catch (error) {
    
  }
}

const logout = (navigate) => {
    window.localStorage.clear();
    navigate('/login');
}

const saveLogin = async (data, firebaseApp) => {
    window.localStorage.setItem('user', JSON.stringify(data));
    try {
      const auth = getAuth(firebaseApp);
      const response = await createUserWithEmailAndPassword(auth, data.user, data.password); 
      console.log(response); 
    } catch (error) {
      alert(error);
    }
    // navigate('/');
}

const login = async (firebaseApp, data, navigate) => {
try {
  const auth = getAuth(firebaseApp);
  const response = await signInWithEmailAndPassword(auth, data.user, data.password); 
  // const {email, displayName}
  console.log(response); 
} catch (error) {
  alert(error);
}
// navigate('/');
}

export {
    verifyLogin,
    logout,
    login,
  sendPasswordReset
  }
