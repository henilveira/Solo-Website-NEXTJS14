import {  createContexto, useState, useEffect  } from 'react'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

    let loginUser = async (e ) => {
        e.preventDefault()
        console.log('Form submitted')
        let response = fetch('http://3.19.188.117:8000/api/token/', {
            method:'POST',
            headers: {
                'Content-Type':'aplication/json'
            },
            body:JSON.stringify({'username':null, 'password':null})
        })
    }

    let contextData = {
        loginUser:loginUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}

        </AuthContext.Provider>

    );
}