import { Children, createContext,useEffect,useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({Children}) => {
    const [profileData,setProfileData] = useState([]);
    const [loading,setLoading] = useState(true)

    return(
        <AuthContext.Provider value={{profileData,loading,setLoading}}>
            {Children}
        </AuthContext.Provider>
    )
}