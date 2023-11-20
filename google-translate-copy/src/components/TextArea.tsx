import { Form } from "react-bootstrap"

type Props = {
    type: string
    onChange: (payload : string) => void
    value: string
    loading?: boolean
}

const estilos_fijos = {height: "200px", border: "0"}

const getPlaceHolder = ({type, loading} : {type: string, loading?: boolean})=> {
    if(type == "from") return "Introducir texto"
    if(loading == true) return "Traduciendo..."
    return "Traduccion"
}


export const TextArea = ({type, onChange, value, loading} : Props )  => {
    const estilos = type == "from" ?  estilos_fijos : {...estilos_fijos, background: "#a19e9e"}

    const handleChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    return (
        <Form.Control
            as= "textarea"
            disabled= {type == "to"}
            autoFocus= {type == "from"}
            placeholder={getPlaceHolder({type, loading})}
            value={value}
            style={estilos}
            onChange={handleChange}
        />
    )
}