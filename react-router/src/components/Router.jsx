import { useState, useEffect } from "react"
import { NAVIGATON_EVENT } from "./Links"
import {  match } from "path-to-regexp"

export function Router({router = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
    const [currenPage, setCurrentPage] = useState(window.location.pathname)
    let routerParams = {}
    useEffect(()=> {
      const locationChange = () => {
        setCurrentPage(window.location.pathname)
      }
  
      window.addEventListener(NAVIGATON_EVENT, locationChange)
      window.addEventListener("popstate", locationChange)
  
      return () => {
        window.removeEventListener(NAVIGATON_EVENT, locationChange)
        window.removeEventListener("popstate", locationChange)
      }
     }, [])

  
     const Page = router.find(root => {
      if( root.path == currenPage) return true

      const matchtedURL =  match(root.path, {decode: decodeURIComponent})
      const matched = matchtedURL(currenPage)

      if(!matched) return false

       routerParams = matched.params
       return true
     } )?.component
  
     return Page ? <Page routeParams={routerParams}/> : <DefaultComponent/>
  }
  