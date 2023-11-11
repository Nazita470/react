import { useFilters } from "../hooks/useFilters"

export function Filters() {
    const {filtrado, setFiltrado} = useFilters()
    const handleMinPrice = (evt) => {
        setFiltrado((prevState) => ({
            ...prevState,
            min_price: evt.target.value
        }))
    }

    const handleCataegory = (evt) => {
        setFiltrado((prevState) => ({
            ...prevState,
            categoria: evt.target.value
        }))
    }
    return (
        <section className="filters">
            <div className="filtro">
                <label htmlFor="price">Precio desde: </label>
                <input type="range" id="price" min="0" max="1000" onChange={handleMinPrice} value={filtrado.min_price}/>
                <span>${filtrado.min_price}</span>
            </div>

            <div className="filtro_category">
                <label htmlFor="select">Categoria: </label>
                <select name="" id="select" onChange={handleCataegory}>
                        <option value='All'>Todas</option>
                        <option value='laptops'>Portátiles</option>
                        <option value='smartphones'>Celulares</option>
                </select>
            </div>
            
        </section>
       
    )
}