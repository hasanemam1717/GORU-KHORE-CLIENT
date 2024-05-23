import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {



  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  const googliProvider = new GoogleAuthProvider();


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth,googliProvider);
  };


  const updateUserProfile = (name, photo) => {
     return updateProfile(auth.currentUser, {
        displayName:name, photoURL:photo
      }).then(() => {
        // Profile updated!
        // ...
      }).catch(() => {
        // An error occurred
        // ...
      });
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Auth state changed", currentUser, signIn);
      setLoading(false);
    });
    return () => {
      unsbscribe();
    };
  }, []);
  const authInfo = { user, loading, createUser, googleSignIn, logOut, signIn,updateUserProfile };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
