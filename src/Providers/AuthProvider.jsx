import {createContext} from 'react'
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState()
    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;