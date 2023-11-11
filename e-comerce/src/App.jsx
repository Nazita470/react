import { Products } from './components/Products'
import { Header } from './components/Header'
import  listProducts from "./mocks/listProducts.json"
import './App.css'
import { useState } from 'react'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Carts'
import { CartContext, CartProvider } from "./context/carts"

function App() {
  const [list_of_products] = useState(listProducts.products)
  const {setFiltrado, filtrar} = useFilters()

  const filtrarProducts = filtrar(list_of_products)

  return (
    <CartProvider>
      <Cart />
      <Header />
      <Products listProducts={filtrarProducts} />
   </CartProvider>
  )
}

export default App
