import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constants"

export type Languages = keyof typeof SUPPORTED_LANGUAGES
export type autoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Languages | autoLanguage

export interface State  {
    fromLanguage: FromLanguage,
    toLanguage: Languages,
    fromText: string,
    result: string,
    loading: boolean
}

export type Action = 
 | { type: "SET_FROM_LANGUAGE", payload: FromLanguage}
 | { type: "INTERCHANGE_LANGUAGES"}
 | { type: "SET_TO_LANGUAGES", payload: Languages}
 | { type: "SET_FROM_TEXT", payload: string}
 | { type: "SET_TO_RESULT", payload: string}
