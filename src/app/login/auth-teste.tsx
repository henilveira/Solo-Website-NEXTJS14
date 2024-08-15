import { createContext, ReactNode } from 'react';

const AuthContext = createContext({ name: '' });

export const AuthProvider2 = ({ children }: { children: ReactNode }) => {
    return (
        <AuthContext.Provider value={{ name: 'Dennis' }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
