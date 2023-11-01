import "./App.css"
import { useState } from "react"

export const FollowCard = ({formatName, name, user}) => {
    const img2  = `https://unavatar.io/${user}`
    const [isFollowig, setFollow] = useState(false)
    let text = isFollowig ? "Siguiendo" : "Seguir"
    let classButton = isFollowig ? "button-selected follow-card-button" : "follow-card-button"

    const formatButton = () => {
        setFollow(!isFollowig)
    }
    return (
     
        <article className="follow-card">
            <img src={img2} alt="Imagen de midudev" className="follow-card-img" />
            <div className="follow-card-info">
                <strong className="follow-card-name">{name}</strong>
                <p className="follow-card-user">{formatName(user)}</p>
            </div>

           <aside className="follow-card-aside" onClick={formatButton}>
                <button className={classButton}>{text}</button>
           </aside>
        </article>
    )
}