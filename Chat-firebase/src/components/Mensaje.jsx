import { useState } from "react"
import "./Mensaje.css"
import { deleteMessage } from "../firebase/firebase"

export function Mensaje({children, photo, msje, currentUid, userUid, id}) {
    
    if(currentUid == userUid) {
        return (
            <div className="messageContainer ourMessage" style={{justifyContent: "end"}}>
               {children}
                <p className="mensaje_contendido">{msje}</p>
                <img className="profile" src={photo} width={30} height={30} alt="" />
            </div>
        )
      
       
    }
    return(
        <div  className="messageContainer" style={{display: "flex"}}>
             <img className="profile" src={photo} width={30} height={30} alt="" />

             <p className="mensaje_contendido" >{msje}</p>
        </div>
       
    )
}