import { Form } from "react-bootstrap";
import { SUPPORTED_LANGUAGES} from "../constants"
import { type FC } from "react"
import { FromLanguage, Languages } from "../types.s";

type Props = 
 | { type: "from", value: FromLanguage, onChange: (languege : FromLanguage) => void}
 | { type: "to", value: Languages, onChange: (languege : Languages) => void}


export const LanguagesOptions : FC<Props> = ({onChange,  value}) => {

const handleChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event?.target.value as Languages)
}

    return(
        <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value}>

           {
            Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option value={key} key={key}>{literal}</option>
            ))
           }
        </Form.Select>
    )
}