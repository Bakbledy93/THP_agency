import React, {useState} from 'react';
import clientsEN from '../data/en'
import clientsFR from '../data/fr'
import{withTranslationContext} from '../context/Translation'


const StudyCase = ({value, id, language}) => {

  const[currentSlug, setCurrentSlug] = useState(value)
  const[currentlanguage, setCurrentLanguage] = useState(language)
  const[currentId, setCurrentId] = useState(id)

  const fr = clientsFR;
  const en = clientsEN;


  const Study =({lang})=>{
    if (lang.client1.map(x => x.slug)== currentSlug){
      let description = lang.client1.map(x => x.description)
      return <p>{description}</p>
    }
    else if(lang.client2.map(x => x.slug)== currentSlug){
      let description = lang.client2.map(x => x.description)
      return <p>{description}</p>
    }
    else if(lang.client3.map(x => x.slug)== currentSlug){
      let description = lang.client3.map(x => x.description)
      return <p>{description}</p>
    }
  }

  const Slug = ({lang}) =>{
    if (lang.client1.map(x => x.id)== currentId){
      console.log("coucou")
      let client = lang.client1
      let slug = client.map(x => x.slug)
      let url = `http://${window.location.host}/works/${slug}`
      console.log(url)
      setCurrentSlug(slug) 
      window.history.replaceState(currentSlug, null, url);
      console.log("bye")
      return client
    }
    else if(lang.client2.map(x => x.id)== currentId){
      console.log("coucou")
      let client = lang.client2
      let slug = client.map(x => x.slug)
      let url = `http://${window.location.host}/works/${slug}`
      console.log(url)
      setCurrentSlug(slug) 
      window.history.replaceState(currentSlug, null, url);
      console.log("bye")
      return client
    }
    else if(lang.client3.map(x => x.id)== currentId){
      console.log("coucou")
      let client = lang.client3
      let slug = client.map(x => x.slug)
      setCurrentSlug(slug) 
      let url = `http://${window.location.host}/works/${slug}`
      console.log(url)
      window.history.replaceState(currentSlug, null, url);
      console.log("bye")
      return client
    }
  }

  const Studies =()=>{
    if(currentlanguage.language == 'fr'){
      console.log("hello")
      let lang = fr
      // Slug({lang})
      return <Study lang ={lang}/>
    }
    else if (currentlanguage.language == 'en'){
      console.log("Ola")
      let lang = en
      // Slug({lang})
      return <Study lang ={lang}/>
    }
  }

  return (
      <>
          <h1>StudyCase</h1>
          <Studies/>
      </>
  )
};


export default withTranslationContext(StudyCase);
