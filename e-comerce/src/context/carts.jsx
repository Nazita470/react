import { createContext, useState, useReducer} from "react";
import { initialState, reducer, comandos } from "../reducer/cartReducer";

export const CartContext = createContext()




export function CartProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState)
    

    function agregarCarrito(product) {
      dispatch({
        type: comandos.ADD_TO_CART,
        payload: product
      })
}

    function eliminarCarrito(product) {
      dispatch({
        type: comandos.DELETE_FORM_CART,
        payload: product
      })
    }

    function clearCarrito() {
       

    }



    return (
        <CartContext.Provider value={{
            carrito: state, 
            agregarCarrito,
            clearCarrito,
            eliminarCarrito
        }}>

            {children}

        </CartContext.Provider>
    )

}