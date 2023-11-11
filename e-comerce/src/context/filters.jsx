import { createContext, useContext, useState } from "react";


export const FiltersContext = createContext()

export function FiltersProvider({children}) {
    const [filtrado, setFiltrado] = useState({
        categoria: "All",
        min_price: 0
      })

      return (
        <FiltersContext.Provider value={{
            filtrado,
            setFiltrado
        }
            
        }>
            {children}
        </FiltersContext.Provider>
      )
}