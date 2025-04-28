import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

// Create Context
const AuthContext = createContext(null); // Provide a default value (optional)

// Provider Context
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // Sign in with Google
    const signinWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider).catch((error) => {
            console.error("Error during sign-in:", error);
        });
    };

    const value = {
        currentUser,
        setCurrentUser,
        signinWithGoogle,
    };

    // Set current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return unsubscribe; // Cleanup subscription on unmount
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
export const UserAuth = () => {
    return useContext(AuthContext);
};