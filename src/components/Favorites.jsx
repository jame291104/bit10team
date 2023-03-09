import '../App.css'
import { useState } from "react";
import { Form } from "./Form";
import { List } from "./List";
import { HeaderAU } from "./HeaderAU";
import { Footer } from "./Footer";

export const Favorites = () => {
  const [lang, setLang] = useState({id: null, name: "", learned: false})
  const [language, setLanguage] = useState([])
  const [rename, setRename] = useState([null])

  
  return (
    <>
     <HeaderAU/>
      <div className='fondofav contenedorhijofav text-center'>
        <div className='d-flex flex-column justify-content-center'>
          <h1 className='hfav'>Welcome To Favorites</h1>
           <h3 className='text-light'>Add all your favorites games</h3>

           <Form lang={lang} setLang={setLang} language={language} setLanguage={setLanguage} rename={rename} setRename={setRename}/>
           <List lang={lang} setLang={setLang} language={language} setLanguage={setLanguage} rename={rename} setRename={setRename}/>
        </div>
      </div>
     <Footer/> 
    </>
  );
}

