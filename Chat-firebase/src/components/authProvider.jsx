import { useEffect } from "react";
import { auth, userExists, registerUser, getUserInfo } from "../firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"



export function AuthProvider({
        children, 
        onUserExists,
        onUserNotExists,
        onUserNoLogeado
    }
) {

    useEffect( () => {
        onAuthStateChanged(auth, async (user) => {
            if(user) {
                const exist = await userExists(user.uid)
                if(exist){
                    const info = await getUserInfo(user.uid)
                    onUserExists(info)   
                }
                else {
                    await registerUser({
                        uid: user.uid,
                        name: user.displayName,
                        photo: user.photoURL
                    })
                    onUserNotExists(user)
                }


            }
            else {
                onUserNoLogeado(user)
            }
        })
    }, [])

    return(
        <div style={{width: "100%", height: "100%"}}>{children}</div>
    )
}