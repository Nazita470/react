import { useState } from "react"
import { Await, useNavigate } from "react-router-dom"
import { AuthProvider } from "../components/authProvider"
import { DashboardHeader } from "../components/DashboardHeader"
import {v4 as uuidv4} from "uuid"
import { insertNewLink, getLinksUser, updateLink, deleteLink, getImageProfile } from "../firebase/firebase"
import { UserLink } from "../components/UserLink"
import style from "./DashboardView.module.css"

export function DashboardView() {

    const [state, setState] = useState(0)
    const [currentUser, setCurrentUser] = useState({})
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [links, setLinks] = useState([])
    const navigate = useNavigate()
    const [profileUrl, setProfileUrl] = useState("")

    const handleLogedIn = async (user) => {
        setCurrentUser(user)
        const linksExtraidos = await getLinksUser(user.uid)
        setLinks(linksExtraidos)
        setState(5)
        if(user.profilePicture) {
            const url = await getImageProfile(user.profilePicture)
            setProfileUrl(url)
        }
       
    }
    
    const handleNotLogedIn = (user) => {
        navigate("/login")
    }
    
    const handleNotRegister = () => {
       navigate("/login")
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(title != "" && url != ""){
            const newLink = {
                title: title,
                url: url,
                uid: currentUser.uid,
                id: uuidv4()
            }

            const res = await insertNewLink(newLink)
            newLink.docId = res.id

            await updateLink(res.id, newLink)

            setTitle("")
            setUrl("")
            setLinks([...links, newLink])
        }
    }

    const handleChange = (e) => {
        const value = e.target.value

        if(e.target.name == "title"){
            setTitle(value)
        }else if(e.target.name == "url"){
            setUrl(value)
        }
    }

    const handleDeleteLink = async (docId) => {
        await deleteLink(docId)
        const tmp = links.filter((link) => link.docId != docId)
        setLinks([...tmp])
    }

    const handleUpdateLink = async (docId, title, url) => {
        const linkncontrado = links.find(link => link.docId == docId)
        linkncontrado.title = title
        linkncontrado.url = url
        await updateLink(docId, linkncontrado)
    }

    if(state == 0) {
        return (
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
            </AuthProvider>
        )
    }
    return (
       <DashboardHeader
        username={currentUser.username}
        profile={profileUrl}
       >

        <main>
            <div className={style.container}>
                <h1 className={style.title}>Inicio</h1>

                <form className={style.formulario} action="" onSubmit={handleSubmit}>
                    <span>
                        <label className={style.inputLabel} htmlFor="title">Titulo:</label>
                        <input className="input" type="text" name="title" value={title} onChange={handleChange}/>
                    </span>
                   
                    <span>
                        <label className={style.inputLabel}  htmlFor="url">Url: </label>
                        <input className="input" type="text" name="url" value={url} onChange={handleChange}/>
                    </span>
                    


                    <button className="boton">Crear link</button>
                </form>

                <div className={style.linksContainer}>
                    {
                        links.map(link => (
                        <UserLink 
                                key={link.id} 
                                docId={link.docId}
                                title={link.title}
                                url={link.url}
                                onDelete={handleDeleteLink}
                                onUpdate={handleUpdateLink}
                        />
                        ))
                    
                    }
                </div>
            </div>
        </main>

        
                

       </DashboardHeader>
    )
}