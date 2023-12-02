import { useEffect, useRef, useState } from "react"
import "./UserLink.css"

export function UserLink({docId, title, url, onDelete, onUpdate}) {

    const [currentTitle, setCurrentTitle] = useState(title)
    const [currentUrl, setCurrentUrl] = useState(url)

    const [editTitle, setEditTitle] = useState(false)
    const [editUrl, setEditUrl] = useState(false)

   const titleRef = useRef(null)
   const urlRef = useRef(null)

   useEffect(() => {
    if(titleRef.current) {
        titleRef.current.focus()
    }

   }, [editTitle])

   useEffect(() => {
    if(urlRef.current) {
        urlRef.current.focus()
    }

   }, [editUrl])


    const handleEditTitle = (e) => {
        e.preventDefault()
        setEditTitle(true)
    }

    const handleEditUrl = (e) => {
        e.preventDefault()
        setEditUrl(true)

    }

    const handleChangeTitle = (e) => {
        setCurrentTitle(e.target.value)
    }

    const handleChangeUrl = (e) => {
        setCurrentUrl(e.target.value)
    }

    const handleBlurTitle = () => {
        setEditTitle(false)
        onUpdate(docId, currentTitle, currentUrl)
    }

    const handleBlurUrl = () => {
        setEditUrl(false)
        onUpdate(docId, currentTitle, currentUrl)
    }

    const handleDeleteLink = async () => {
        onDelete(docId)
    }
    return (
        <div key={docId} className="contenedor_userLinks">
            <section className="title_url_container">
                <div className="link_container">
                    {
                        editTitle ? 
                        <>
                            <input 
                                type="text" 
                                value={currentTitle} 
                                onChange={handleChangeTitle} 
                                onBlur={handleBlurTitle}
                                ref={titleRef}
                                className="input_link"
                            />
                        </> 
                        
                        : 
                        
                        <> 
                            <button className="editButton" onClick={handleEditTitle}>
                                <span className="material-symbols-outlined">
                                    edit
                                </span>
                            </button>
                            <p className="title_url_link">{currentTitle}</p>
                        </>
                        
                    }
                  
                </div>

                <div style={{display: "flex"}}>

                    {
                        editUrl ? 
                        <>
                            <input 
                                type="text" 
                                value={currentUrl} 
                                onChange={handleChangeUrl} 
                                onBlur={handleBlurUrl}
                                ref={urlRef}
                                className="input_link"
                            />
                        </>

                        :

                        <>
                              <button className="editButton" onClick={handleEditUrl}>
                                <span class="material-symbols-outlined">
                                    edit
                                </span>
                              </button>
                              <p  className="title_url_link">{currentUrl} </p>
                        </>

                    }
                  
                </div>
            </section>
          
           
           <button className="deleteButton" onClick={handleDeleteLink}>
            <span className="material-symbols-outlined">
                delete
            </span>
            </button>
        </div>
    )
}