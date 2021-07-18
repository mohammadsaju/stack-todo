import react, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();


function AuthProvider({ children }) {
    const [auth, setauth] = useState(true);
    const handleAuth = () => {
        setauth(!auth);
    }
    const value = {auth, handleAuth};
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error('there is an error');
    }
    return context;
}

export { AuthProvider, useAuth};