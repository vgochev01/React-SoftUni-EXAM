import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext();

function AuthProvider({
    children
}) {

    const [user, setUser] = useLocalStorage('user', null);

    return (
        <>
            <AuthContext.Provider value={{ user, setUser }}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export {
    AuthContext, AuthProvider
};