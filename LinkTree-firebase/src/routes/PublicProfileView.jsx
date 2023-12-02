import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { usernameExists, getPublicProfile, getImageProfile } from "../firebase/firebase"
import style from "./PublicProfileView.module.css"

export function PublicProfileView() {
    const params = useParams()
    const [profile, setProfile] = useState({})
    const [profileUrl, setProfileUrl] = useState()
    const [state, setState] = useState(0)

    useEffect(() => {
        getprofile()

        async function getprofile(){
            try {
                const userUid = await usernameExists(params.username)
                if(userUid){
                    const publicProfile = await getPublicProfile(userUid)
                    setProfile(publicProfile)
                    const url = await getImageProfile(publicProfile.userInfo.profilePicture)
                    setProfileUrl(url)
                    
                } else {
                    setState(5)
                }
            } catch (error) {
                console.error(error)
            }
        }

      
       
    },[params])

if(Object.entries(profile).length != 0) {
    return (
        <div className={style.allContainer}>
            <div className={style.container}>
                <div >
                    <img className={style.profile} width={150} src={profileUrl} alt="Foto de perfil del usuario" />
                </div>
               
                <h2 className={style.username}>{profile.userInfo.username}</h2>
                <h3 className={style.name}>{profile.userInfo.name}</h3>
                <div>
                    {
                        profile.link?.map((link) => (
                            <div className={style.container_link} key={link.id}>
                                <a className={style.link} href={link.url}>{link.title}</a>
                            </div>
                        
                        ))
                    }
                </div>
            </div>
              

        </div>
    )
}

if(state == 5){
    return(
        <div>El usuario no existe</div>
    )
}

return (
    <section className="loader_container">
        <div className="loader"></div>
    </section>
)
}