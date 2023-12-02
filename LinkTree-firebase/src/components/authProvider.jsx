import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth, getUserInfo, registerUser, userExists } from "../firebase/firebase" 


export function AuthProvider({
    children,
    onUserLogedIN,
    onUserNotLogedIn,
    onUserNotRegister
}) {


    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if(user) {
                const exists = await userExists(user.uid)

                if(exists) {
                    const userInfo = await getUserInfo(user.uid)
                    if(userInfo.processCompleted){
                        onUserLogedIN(userInfo)
                    } else {
                        onUserNotLogedIn(userInfo)  
                    }
                   
                }
                
                else {
                    await registerUser({
                        uid: user.uid,
                        name: user.displayName,
                        profilePicture: "",
                        username: "",
                        processCompleted: false
                    })
                    onUserNotLogedIn(user)   
                }
            } 
            
            
            else {
                onUserNotRegister()
            }
        })
    }, [])
    
    return (
       <div>{children}</div> 
    )
}