import { HomePage } from "../components/HomePage"
import { AboutPage } from "../components/AboutPage"
import { SearchPage } from "../components/SearchPage"

export const roots = [
    {
      path:  "/",
      component: HomePage
    },
    {
      path: "/about",
      component: AboutPage
    },
    {
      path: "/search/:query" , 
      component: SearchPage
    }
  ]