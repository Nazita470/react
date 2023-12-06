import { useSearchParams } from "react-router-dom"
import { Header } from "../components/Header"
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import {MoviesContext} from "../context/moviesContext"
import {v4 as uuidv4} from "uuid"
import style from "./CreateView.module.css"

export function CreateView() {
    const {movies, agregarPeli} = useContext(MoviesContext)
    const [file, setFile] = useState()
    const [title, setTitle] = useState("")
    const [autor, setAutor] = useState("")
    const [intro, setIntro] = useState("")
    const [review, setReview] = useState("")
    const fileRef = useRef()

     
    const handleArchivoClick = (e) => {
        e.preventDefault()
        if(fileRef.current) {
            fileRef.current.click()
        }
    }

    const handleFileChange = (e) => {
        const docs = e.target.files
        const fileReader = new FileReader()
        if(fileReader && docs && docs.lenght != 0) {
            fileReader.readAsDataURL(docs[0])
            fileReader.onload = function(){
                const image = fileReader.result
                setFile(image)
            }
           
        }
    }

    const inputChange = (e) => {
        if(e.target.name == "title"){
            setTitle(e.target.value)
        }else if (e.target.name == "autor"){
            setAutor(e.target.value)
        }else if (e.target.name == "Introduccion") {
            setIntro(e.target.value)
        }else if (e.target.name == "Review") {
            setReview(e.target.value)
        }
    }

    const handleSubmit = (e) => {
       e.preventDefault()
        const newMovie = {
            id: uuidv4(),
            title: title,
            autor: autor,
            intro: intro,
            review: review,
            img: file

        }
        agregarPeli(newMovie)
        limpiarCampos()
    }

    const limpiarCampos = () => {
        setAutor("")
        setReview("")
        setTitle("")
        setIntro("")
        setFile(null)
    }
    return(
   
        <Header>
        <main>
            <h1 className={style.title}>Ingresa una pelicula</h1>

            <div className={style.formContainer}>
                <form className={style.form} action="" onSubmit={handleSubmit}>
                <div>
                    <label className={style.label} htmlFor="title">Title</label>
                    <input className={style.input} value={title} type="text" name="title" onChange={inputChange} required/>
                </div>

                <div>
                        <label className={style.label}  htmlFor="autor">Autor</label>
                        <input  className={style.input} value={autor} type="text" name="autor" onChange={inputChange} />
                </div>

                
                <div>
                    <label className={style.label}  htmlFor="btnArchivo">Archivo:</label>
                    <button className={style.crearButton} name="btnArchivo" onClick={handleArchivoClick}>Buscar archivo</button>
                    <input ref={fileRef} type="file" style={{display: "none"}}  onChange={handleFileChange}/>
                </div>

                {
                    file ? 
                    
                    <div>
                        <img  className={style.input} height={200} width={200} src={file} alt="" />
                    </div>
                
                    :
                    ""
                    
                }

                    <div>
                        <label className={style.label}  htmlFor="Introduccion">Introduccion</label>
                        <input  className={style.input} value={intro} type="text" name="Introduccion"  onChange={inputChange}/>
                    </div>

                    <div>
                        <label className={style.label}  htmlFor="Review">Review</label>
                        <input  className={style.input} value={review} type="text" name="Review"  onChange={inputChange}/>
                    </div>

                    <button className={style.crearButton}>Crear</button>
                
                </form>
            </div>
            
        </main>
        </Header>
      
       
    )
}