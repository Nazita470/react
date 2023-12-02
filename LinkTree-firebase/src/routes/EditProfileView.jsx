import { DashboardHeader } from "../components/DashboardHeader"
import { AuthProvider } from "../components/authProvider"
import { useEffect, useRef, useState } from "react"
import { getImageProfile, updateImageProfile, updateUser } from "../firebase/firebase"
import style from "./EditProfileView.module.css"
import defaultProfile from "../assets/NoProfile.png"

export function EditProfileView() {
    const [state, setState] = useState(0)
    const [currentUser, setCurrentUser] = useState({})
    const [profileUrl, setProfileUrl] = useState(null)
    const inputRef = useRef(null)

    useEffect(() => {
        if(profileUrl) {

        }else {
            setProfileUrl(defaultProfile)
        }
    }, [profileUrl])

    const handleLogedIn = async (user) => {
        setCurrentUser(user)
        const url = await getImageProfile(user.profilePicture)
        setProfileUrl(url)
        setState(5)
    }
    
    const handleNotLogedIn = (user) => {
        navigate("/login")
    }
    
    const handleNotRegister = () => {
        navigate("/login")
    }

    const handleClickSelecionar = () => {
        if(inputRef.current) {
            inputRef.current.click()
        }
    }

    const handleInputhange = (e) => {
        const files = e.target.files
        const fileReader = new FileReader()

        if(fileReader && files.lenght != 0) {
            fileReader.readAsArrayBuffer(files[0])
            fileReader.onload = async function() {
                const imageData = fileReader.result

                const res = await updateImageProfile(currentUser.uid, imageData)
                if(res) {
                    const tmpUser = {...currentUser}
                    tmpUser.profilePicture = res.metadata.fullPath
                    setCurrentUser({...tmpUser})
                    await updateUser(tmpUser)
                    const image = await getImageProfile(tmpUser.profilePicture)
                    console.log(image)
                    setProfileUrl(image)
                }
            }
        }
    }

   
       
    

    if(state == 5) {
        return (
                <DashboardHeader
                username={currentUser.username}
                profile={profileUrl}
                >
                    <section style={{width: "100%", height: "100%"}}>
                        <main className={style.mainContainer}>
                            <h2 className={style.title}>Editar perfil</h2>

                            <div>
                                <img className={style.profile} src={profileUrl} alt="Foto de perfil del usuario" width={150} />
                            </div>

                            <div>
                                <button className="boton" onClick={handleClickSelecionar}>Seleccionar nuevo perfil</button>
                                <input ref={inputRef} type="file" style={{display: "none"}} onChange={handleInputhange}/>
                            </div>  
                        </main>
                    </section>
                
                </DashboardHeader>
        
        ) 

    }

    return(
        <AuthProvider
        onUserLogedIN={handleLogedIn}
        onUserNotLogedIn={handleNotLogedIn}
        onUserNotRegister={handleNotRegister}
        >
        <DashboardHeader
              username={currentUser.username}
              profile={profileUrl}
        >
                    <section className="loader_container">
                        <div className="loader"></div>
                    </section>
        </DashboardHeader>
      
        </AuthProvider >
    )
}