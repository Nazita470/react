import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { auth, deleteMessage, getAllMessage, getMessage, getPhoto, registerMessage, registerUser, signout } from "./firebase/firebase"
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { AuthProvider } from './components/authProvider'
import {v4 as uuidv4} from "uuid"
import { Mensaje } from './components/Mensaje'
function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [currentMessage, setCurrentMessage] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMen()
  }, [currentUser])

  async function getMen() {
    if(currentUser){
      const m = await getAllMessage()
      setMessages(m)
    }
  }

  const handleClick = async () => {
      const provider = new GoogleAuthProvider()
      await signUpWithGoogle(provider)
  }

  const signUpWithGoogle = async (provider) => {
    try {
      const res = await signInWithPopup(auth, provider)
    } catch (error) {
      console.error(error)
    }
  }

  const handleUserExists = (user) => {
    setCurrentUser(user)
    console.log(user)
  }

  const hanldeNotExists = async (user) => {
    
  }

  const handleUserNotLogeado = () => {
    setCurrentUser(null)
  }

  const handleChangeMessage = (e) => {
    setCurrentMessage(e.target.value)
  }

  const handleSend = async () => {
    if(currentUser && currentMessage.length != 0){
      const photo = await getPhoto(currentUser.uid)

      const m = { 
        id: uuidv4(),
        userId: currentUser.uid,
        message: currentMessage,
        photo: photo
      }
      const  men = [...messages, m]
      setMessages(men)
      console.log(messages)
      setCurrentMessage("")

      await registerMessage(m)
    }
  
  }

  const handleSignOut = async () => {
    await signout()
  }

  const handleDelete = async (e) => {
    const mensajeId = e.target.id
    console.log(mensajeId)
    await deleteMessage(mensajeId)
    const copyMessage = [...messages]
    const newMessages = copyMessage.filter(m => m.id != mensajeId)
    setMessages(newMessages)

  }

  return (
    <AuthProvider
     onUserExists={handleUserExists} 
     onUserNotExists={hanldeNotExists}
     onUserNoLogeado={handleUserNotLogeado}
     >
      <section className='container'>
          <div className='userInfo_container'>
            {
              currentUser ?
              <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <img className='perfilPhoto' src={currentUser.photo} alt="" />
                  <p className='username'>{currentUser.name}</p>
                </div>
                  <button className='login_signout' onClick={handleSignOut}>Sign out</button>

              </div>
              :
            <button className='login_signout' onClick={handleClick}>Login with google</button>

            }
          </div>
        {
            currentUser ? (
              <div>
                  <div style={{width: "300px", height: "300px",padding: "10px", border: "1px solid black", overflowY: "scroll"}}>
                    {
                      messages.map((m) => (
                        <Mensaje key={m.id}
                          id={m.id}
                          photo={m.photo}
                          msje={m.message}
                          currentUid={currentUser.uid}
                          userUid={m.userId}
                      >

                        <button style={{backgroundColor: "transparent", border: "none", display: "flex", alignItems: "center"}} onClick={handleDelete}>
                          <span id={m.id} class="material-symbols-outlined" style={{color: "red"}}>
                            delete
                          </span>
                        </button>
                      </Mensaje>
                      ))

                    }
          
                  </div>
                

                <input className='message_input' value={currentMessage} onChange={handleChangeMessage} type="text" name="" id="" />
                <button className='sendButton' onClick={handleSend}>Enviar</button>
              </div>
                )
                :
                ""
            }
      </section>
    
        
      
      
    </AuthProvider>
  
  )
}

export default App
