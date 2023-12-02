import { useNavigate } from "react-router-dom"
import { signout } from "../firebase/firebase"
import { AuthProvider } from "../components/authProvider"

export function SignoutView() {
    const navigate = useNavigate()

    const handleLogedIn = async (user) => {
        await signout()
    }
    
    const handleNotLogedIn = (user) => {
        navigate("/login")
    }
    
    const handleNotRegister = () => {
        navigate("/login")
    }


    return (
        <AuthProvider
        onUserLogedIN={handleLogedIn}
        onUserNotLogedIn={handleNotLogedIn}
        onUserNotRegister={handleNotRegister}
        >
    
        </AuthProvider >
    )
}