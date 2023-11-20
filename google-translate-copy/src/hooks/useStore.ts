
import { AUTO_LANGUAGE } from '../constants';
import { Action, FromLanguage, Languages, State } from '../types.s';
import { useReducer } from "react"

export const InitialState: State = {
    fromLanguage: "es",
    toLanguage: "en",
    fromText: "",
    result: "",
    loading: false
  }
  
export  function reducer (state: State, action: Action) {
    const {type} = action
  
    switch(type) {
      case "INTERCHANGE_LANGUAGES":
        if(state.fromLanguage == AUTO_LANGUAGE) return state
        return {
       
          ...state,
          fromLanguage: state.toLanguage,
          toLanguage: state.fromLanguage
        }
  
      case "SET_FROM_LANGUAGE":
        return {
          ...state,
          fromLanguage: action.payload
        }
        
      case "SET_TO_LANGUAGES":
        return {
          ...state,
          toLanguage: action.payload
        }
        
      case "SET_FROM_TEXT": 
        return {
          ...state,
          fromText: action.payload,
          loading: true,
          result: ""
        }  
      
      case "SET_TO_RESULT":
        return {
          ...state,
          result: action.payload,
          loading: false
    }
  }
  
  
  }

 export function useStore() {
    const [{fromLanguage, toLanguage, fromText, result, loading}, dispatch] = useReducer(reducer, InitialState)

    const SET_FROM_LANGUAGE = (payload: FromLanguage) => dispatch({type: "SET_FROM_LANGUAGE", payload})
    const SET_FROM_TEXT = (payload: string) => dispatch({type: "SET_FROM_TEXT", payload})
    const SET_TO_LANGUAGES = (payload:Languages) => dispatch({type: "SET_TO_LANGUAGES", payload })
    const SET_TO_RESULT  = (payload: string) => dispatch({type: "SET_TO_RESULT", payload })
    const INTERCHANGE_LANGUAGES = () => dispatch({type: 'INTERCHANGE_LANGUAGES'})
    return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        SET_FROM_LANGUAGE,
        SET_FROM_TEXT,
        SET_TO_LANGUAGES,
        SET_TO_RESULT,
        INTERCHANGE_LANGUAGES
 }
}
  