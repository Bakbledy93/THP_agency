import React, {useState} from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom"
import clientsEN from '../data/en'
import clientsFR from '../data/fr'
import{withTranslationContext} from '../context/Translation'
import StudyCase from './StudyCase'
import { FormattedMessage } from 'react-intl';

import {useParams, useRouteMatch } from "react-router-dom";

const Projects=({language})=> {

  const[currentlanguage, setCurrentLanguage] = useState(language)
  
  console.log(currentlanguage.language)
  let match = useRouteMatch();

  const fr = clientsFR;
  const en = clientsEN;

  const lang =()=>{
    if(currentlanguage.language ==='fr'){
      return fr
    }
    else if (currentlanguage.language ==="en"){
      return en
    }
  };


  const Work=()=>{
    let { workID } = useParams();
    console.log(workID)
  
  return (
    <>
    { workID === `${lang().client1[0].slug}` && <StudyCase value={lang().client1[0].slug} id={lang().client1[0].id}/> }
    { workID === `${lang().client2[0].slug}` && <StudyCase value={lang().client2[0].slug} id={lang().client2[0].id}/> }
    { workID === `${lang().client3[0].slug}` && <StudyCase value={lang().client3[0].slug} id={lang().client3[0].id}/> }
    </>
  )
  };
  
  return (
      <div>
        <h1>PROJECTS</h1>
        <p><FormattedMessage id="home.works"/></p>
        <ul>
          <li>
            <Link to={`${match.url}/${lang().client1[0].slug}`}>Platon</Link>
          </li>
          <li>
            <Link to={`${match.url}/${lang().client2[0].slug}`}>Sedal</Link>
          </li>
          <li>
            <Link to={`${match.url}/${lang().client3[0].slug}`}>Solane</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${match.path}/:workID`}>
          <Work />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
  );
}

export default withTranslationContext(Projects);
