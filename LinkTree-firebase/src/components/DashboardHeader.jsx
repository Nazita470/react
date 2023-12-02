import { Link } from "react-router-dom"
import "./DashboardHeader.css"
import { useEffect, useState } from "react"
import deafaultProfile from "../assets/NoProfile.png"

export function DashboardHeader({username, profile, children}) {

    const [currentProfile, setCurrentProfile] = useState(profile)

    useEffect(() => {
        if(profile) {
            setCurrentProfile(profile)
           
        }else {
            setCurrentProfile(deafaultProfile)
        }
    }, [profile])

    return (
        <div className="allContainer">

            <div  className="container">
                <nav>
                    <ul>
                        <li className="logotipo">
                            <div>
                                <img className="profilePicture" 
                                src={currentProfile}
                                alt="Foto" />
                                <p className="username">{username}</p>
                            </div>

                        </li>
                        <li><Link to="/dashboard">Links</Link></li>
                        <li><Link to="/dashboard/profile">Perfil</Link></li>
                        <li><Link to="/signout">Salir</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="childrens">
                {children}
            </div>
                
            

        </div>
    )
}