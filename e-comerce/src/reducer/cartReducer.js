export const initialState = JSON.parse(window.localStorage.getItem("cart")) || []

const updateLocalStorage = (state) => {
    window.localStorage.setItem("cart", JSON.stringify(state))
}

export const reducer = (state, action) => {
    const { type: actionType, payload: actionPayload} = action
    switch(actionType){
        case comandos.ADD_TO_CART: {
            const { id } = actionPayload
            let index = state.findIndex(item => item.id == id)
            if(index == -1) {
                const newCart = [
                    ...state, 
                    {
                        ...actionPayload,
                        quantity: 1
                    }
                ]
                updateLocalStorage(newCart)
                return (newCart)
            } 
            else {
                const newList =  state.map(element => {

                    if(element.id == id){
                        const p = {
                            ...element
                        } 
                        p.quantity += 1
        
                        return p
                    }

                    else{
                            return element
                        }
                })

                updateLocalStorage(newList)
                return (newList)                
            }
        
        }
u
        
        case comandos.DELETE_FORM_CART: {
            const { id } = actionPayload
            const nuevaList = state.filter((element) => element.id != id)
            updateLocalStorage(nuevaList)
            return (nuevaList)
        }
    }
    return state

}

export const comandos = {
    ADD_TO_CART: "ADD_TO_CAR",
    DELETE_FORM_CART: "DELETE_FORM_CART"
}