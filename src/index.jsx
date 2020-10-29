import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl';
import messagesFr from './translations/fr';
import messagesEn from './translations/en';
import TranslationContext from './context/Translation';
import Buttons from './components/Buttons'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Navbar from "./components/Navbar"

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const getInitialLanguage = () => {
  if ((localStorage.getItem('currentLanguage') === 'null') || (localStorage.getItem('currentLanguage') === 'undefined')) {
    return 'fr'
  } else {
    return localStorage.getItem('currentLanguage')
  }
}

const App =()=> {
  const[language, setLanguage] = useState(() => getInitialLanguage())

  useEffect(() => {
    localStorage.setItem('currentLanguage', language);
  }, [language])

  console.log(language)
  console.log({messages})

  return(
    <TranslationContext.Provider value={{
      language,
      french: ()=> setLanguage('fr'),
      english: ()=>setLanguage('en')
    }}>
      <IntlProvider locale={language} messages={messages[language]}>

      <Router>
              <p>Bienvenue chez The Agency</p>
        <div>
          <Buttons/>
          <Navbar />

          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works">
              <Projects/>
            </Route>
          </Switch>
        </div>
      </Router>

      </IntlProvider>
  </TranslationContext.Provider>
  )

}

ReactDOM.render(<App />, document.querySelector("#root"));
