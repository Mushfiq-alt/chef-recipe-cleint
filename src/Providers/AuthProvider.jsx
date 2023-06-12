import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [reload, setReload] = useState(false);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };

  const signInGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGithub);
  };

  const createUser = (email, password, photoURL, displayName) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).then(
      (result) => {
        const user = result.user;
        return updateProfile(user, { photoURL: photoURL }).then(() => {
          return updateProfile(user, { displayName: displayName }).then(() => {
            return user;
          });
        });
      }
    );
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    reload,
    setReload,
    user,
    loading,
    createUser,
    signIn,
    logOut,
    signInGoogle,
    signInGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
