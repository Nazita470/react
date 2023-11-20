import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}){
    const [carrito, setCarrito] = useState([])
    

    function agregarCarrito(product) {
      let index = carrito.findIndex(item => item.id == product.id)
      console.log(carrito)
      console.log(index)
        if(index == -1) {
            setCarrito([
                ...carrito, 
                {
                    ...product,
                    quantity: 1
                }
            ])
        }
        else {
            let indicePrincipal = 0
            carrito.map(element => {
                if(element.id == product.id){
                    let indice = carrito.indexOf(element)

                   indicePrincipal = indice
                }
            })

            setCarrito()
        
            
        }

}

    function clearCarrito() {
        setCarrito([])

    }



    return (
        <CartContext.Provider value={{
            carrito, 
            agregarCarrito,
            clearCarrito
        }}>

            {children}

        </CartContext.Provider>
    )

}