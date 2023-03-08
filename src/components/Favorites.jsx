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
      <div className="App">
        <div className='Container'>
          <h1>Welcome To Favorites</h1>
           <h2>Add all your favorites games</h2>

           <Form lang={lang} setLang={setLang} language={language} setLanguage={setLanguage} rename={rename} setRename={setRename}/>
           <List lang={lang} setLang={setLang} language={language} setLanguage={setLanguage} rename={rename} setRename={setRename}/>
        </div>
      </div>
     <Footer/> 
    </>
  );
}

