import React from 'react'
import ReactDOM from 'react-dom/client'
import {FollowCard} from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'))
const format = (string) => `@${string}` 
root.render(
    <>
     <FollowCard formatName={format} name="Nazareno" user="midudev"/>
     <FollowCard formatName={format} name="Pedro" user="P"/>
     <FollowCard formatName={format} name="Pedro" user="ex"/>
    </>
   
)
