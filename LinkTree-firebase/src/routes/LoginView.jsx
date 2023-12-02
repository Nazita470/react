import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth"
import { auth, userExists } from "../firebase/firebase" 
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthProvider } from "../components/authProvider"
import style from "./loginView.module.css"

export function LoginView() {
const navigate = useNavigate()
const [state, setCurrentState] = useState(0)  

 
const handleClick = async () => {
    const google = new GoogleAuthProvider()
    await signInWithGoogle(google)
}

const signInWithGoogle = async (provider) => {
    try {
        const res = await signInWithPopup(auth, provider)
        console.log(res)
    } catch (error) {
        console.error(error)
    }
}

const handleLogedIn = (user) => {
    navigate("/dashboard")
    
}

const handleNotLogedIn = (user) => {
    navigate("/choose-username")
}

const handleNotRegister = () => {
    setCurrentState(2)
}

if(state == 2) {
    return (
        <div className={style.container}>
            <button className={style.provider} onClick={handleClick}>Login with Google</button>
        </div>
    )
}


return (
    <AuthProvider
        onUserLogedIN={handleLogedIn}
        onUserNotLogedIn={handleNotLogedIn}
        onUserNotRegister={handleNotRegister}
    >
            <section className="loader_container">
                <div className="loader"></div>
            </section>
    </AuthProvider>

) 
    
}