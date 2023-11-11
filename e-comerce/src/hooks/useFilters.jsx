import { useState , useContext} from "react"
import { FiltersContext } from "../context/filters"
export function useFilters() {
    const filtrado = useContext(FiltersContext).filtrado
    const setFiltrado = useContext(FiltersContext).setFiltrado
  
    function filtrar(arr) {
      return arr.filter((item) => { 
        return (
          item.price > filtrado.min_price && (
            filtrado.categoria == "All" || filtrado.categoria == item.category
          )
        )
      })
    }
  
    return { setFiltrado, filtrado, filtrar}
  }