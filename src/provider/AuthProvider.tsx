import { useEffect, useState, PropsWithChildren } from "react";
import { AuthContext } from "../context/AuthContext";
import firebase from 'firebase/compat/app';
import { auth } from "../firebaseSetup";

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};