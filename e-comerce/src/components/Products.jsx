import "../components_style/Products.css"
import { CartContext, CartProvider } from "../context/carts";
import { useContext } from "react";

export function Products({listProducts}) {
    const {carrito, agregarCarrito, eliminarCarrito} = useContext(CartContext)
    const isProduct = (product) => {
        return carrito.some((item) => item.id === product.id)
    } 
    

    return (
        <main>
            <ul className="contenedorProductos">
                {
                    listProducts.map((element) => {
                        return(
                        <li className="producto" key={element.id}>
                            <img src={element.thumbnail} alt={element.title} />
                            <div>
                                <strong>{element.title}</strong> - <p>${element.price}</p>
                            </div>

                            <div>
                                <button style={{background: isProduct(element) ? "red" : "white", color: isProduct(element) ? "white" : "black"}} onClick={() => {
                                    isProduct(element) 
                                    ? eliminarCarrito(element)
                                    : agregarCarrito(element)
                                }}>
                                    {
                                        isProduct(element)
                                        ? "Eliminar del 🛒"
                                        : "Agregar al 🛒"
                                    }
                                    </button>
                            </div>
                        </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}