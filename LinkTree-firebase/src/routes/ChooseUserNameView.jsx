import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../components/authProvider";
import { useState } from "react";
import { updateUser, usernameExists } from "../firebase/firebase";
import { updateCurrentUser } from "firebase/auth";
import style from "./ChooseUserName.module.css"


export function ChooseUserNameView() {
    const [state, setState] = useState()
    const [currentUser, setCurrentUser] = useState({})
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    const handleLogedIn = (user) => {
        navigate("/dashboard")
    }
    
    const handleNotLogedIn = (user) => {
        setCurrentUser(user)
        setState(2)
    }
    
    const handleNotRegister = () => {
        navigate("/login")
    }

    const handleInputChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handleClick = async () => {
       

        if(username != ""){
            const existsUser = await usernameExists(username)
            console.log(existsUser)
            if(existsUser){
                setState(5)
            }else {
                const tmp = {...currentUser}
                tmp.username = username
                tmp.processCompleted = true
                await updateUser(tmp)
                handleLogedIn()
            }
        }
    }

    if(state == 2 || state == 5) {

    
        return (
          <div className={style.container}>
            <main className={style.main}>
                <h1 className={style.title}>Bienvenido</h1>
                <h2 className={style.subTitle}>{currentUser.name} </h2>
                
                <div className={style.containerInput}>
                    <label className={style.inputLabel}>Elige un nombre de usuario</label>
                    <input style={{width: "280px", marginTop: "10px"}} className="input" type="text" placeholder="Nombre de usuario" onChange={handleInputChange} />
                </div>

                {state == 5 ? <p style={{color: "red"}}>El nombre ya existe</p> : ""}

                <div>
                    <button className="boton" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "300px"}} onClick={handleClick}>
                        Continuar 
                        <span className="material-symbols-outlined">
                            navigate_next
                        </span>
                    </button>
                </div>
            </main>
            

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