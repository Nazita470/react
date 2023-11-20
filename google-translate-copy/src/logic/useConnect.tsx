import { Languages } from "../types.s";

export async function useTranslate({text, fromLanguage, toLanguage} : {text: string, fromLanguage: Languages, toLanguage: Languages}) {
    /*
    const pedido = await 
    fetch(`https://libretranslate.com/?source=
    es&target=en&q=Hola`, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
            format: "text",
            api_key: ""
        }),
        headers: {"Content-Type": "application/json"}
    })


    return( pedido)*/

    const res = await fetch("https://libretranslate.com/translate", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
        q: "Hello!",
        source: "en",
        target: "es"
    }),
    headers: { "Content-Type": "application/json" }
        });

     let json = res   

    return (res);
    
}