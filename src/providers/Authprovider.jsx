import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  getAuth,
} from "firebase/auth";
import axios from "axios";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch user role from MongoDB
  const fetchUserRole = async (email) => {
    try {
      const collections = ['admins', 'doctors', 'patients', 'staffs'];
      
      for (const collection of collections) {
        const response = await axios.get(`http://fkw8sgsg4cwwkw84s4wgs0c8.92.112.181.229.sslip.io/${collection}/profile/${email}`);
        if (response.data) {
          return response.data.role;
        }
      }
      return null;
    } catch (error) {
      console.error('Error fetching user role:', error);
      return null;
    }
  };

  const createUser = async (email, password, role) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      // Store the user data in the appropriate collection
      await axios.post(`http://fkw8sgsg4cwwkw84s4wgs0c8.92.112.181.229.sslip.io/${role}s`, {
        email,
        role,
        createdAt: new Date(),
      });
      
      const userWithRole = { ...result.user, role };
      setUser(userWithRole);
      return result;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      // Fetch role after successful sign in
      const role = await fetchUserRole(email);
      const userWithRole = { ...result.user, role };
      setUser(userWithRole);
      return result;
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Fetch and add role to the user object
        const role = await fetchUserRole(currentUser.email);
        setUser({ ...currentUser, role });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
