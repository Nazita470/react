import { useId, useState, useContext } from "react";
import "../components_style/Carts.css"
import { CartContext, CartProvider } from "../context/carts";

export function Cart() {
    const idLabel = useId()
    const {carrito, agregarCarrito, eliminarCarrito} = useContext(CartContext)

    const handleClick = (evt) => {
      
    }

    return (
        <div className="div_contenedor_carrito">
            <label className="label_carrito" htmlFor={idLabel}>🛒</label>
            <input className="check_carrito" type="checkbox" id={idLabel} hidden/>

            <aside className="menu_carrito">
                <ul className="ul_menu_carrito">
                    {
                        carrito.length != 0
                        ?
                         carrito.map((element) => {
                            return (
                            <li className="producto_carrito" key={element.id}>
                               <img src={element.thumbnail} alt={element.title} />
                                <strong>{element.title}</strong> <p>${element.price}</p>

                                <footer>
                                    <p>Cantidad: {element.quantity}</p> 
                                    <div>
                                        <button onClick={() => agregarCarrito(element)}>+</button>
                                        <button style={{background: "red", color:"white", marginLeft: "10px"}} onClick={() => eliminarCarrito(element)}>Borrar</button>
                                    </div>
                                    
                                </footer>
                            </li>
                            )
                        })

                        : <p style={{textAlign: "center", width: "100%"}}>No hay productos</p>
                    }
                    
                </ul>
            </aside>
        </div>
        
    )
}