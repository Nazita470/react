import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './hooks/useStore';
import { Row, Col, Container, Button, Form, Stack } from 'react-bootstrap';
import { IconTranslate } from './components/IconTranslate';
import {LanguagesOptions} from "./components/LanguagesOptions"
import { TextArea } from './components/TextArea';
import { useEffect } from 'react';
import { useTranslate } from './logic/useConnect';

function App() {
  const {loading, fromLanguage, toLanguage, result, fromText, SET_FROM_TEXT, SET_TO_RESULT, SET_FROM_LANGUAGE, SET_TO_LANGUAGES ,INTERCHANGE_LANGUAGES} = useStore()
 
  useEffect(() => {
    SET_TO_RESULT(fromText)
  }, [fromText])

  useEffect(() => {
    const valor = useTranslate({text: "Hola", fromLanguage: "es", toLanguage: "en"})
    console.log(valor)
  },[])
 
 
  return (
    

    <Container fluid>
       <h1>Google Translate</h1>

        <Row>
            <Col xs="auto">

              <Stack gap={2}>
                <LanguagesOptions 
                  type='from'
                  value={fromLanguage}
                  onChange={SET_FROM_LANGUAGE} 
                />

                <TextArea
                   type="from"
                   onChange={SET_FROM_TEXT}
                   value={fromText}
                />
              </Stack>
                
            </Col>

            <Col>
               <Button variant='link' onClick={() => INTERCHANGE_LANGUAGES()}>
                 <IconTranslate />
               </Button>
            </Col>

            <Col xs="auto">
              <Stack gap={2}>
                  <LanguagesOptions
                    type='to'
                    value={toLanguage}
                    onChange={SET_TO_LANGUAGES}
                  />

                  <TextArea
                    loading={loading}
                    type='to'
                    value={result}
                    onChange={SET_TO_RESULT}
                    />

                   
              </Stack>
             
            </Col>
            
        </Row>        
    </Container>
   
  )
}

export default App
