import React, { useEffect, useState} from 'react'
import {  } from "../App.css";
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";

export const Form = ({lang, setLang, language, setLanguage, rename, setRename}) => { 

    const [exists, setExists] = useState(null)

    useEffect(() => {
        const newArray = language.filter((lang) => lang.id === rename);
        setExists(newArray[0])
    }, [rename])
    

    const handleInput = (e) =>{
        setLang({...lang, id: uuidv4(), name: e.target.value})
    }

    const handleAdd = (e) => {
        e.preventDefault()

        if(!lang.name.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Apparently you did not write anything',
                footer: 'Try again please'
              })
        }else{
            setLanguage([...language, lang])
            setLang({id: null, name: "", learned: false})
        }
    }
    if (language.length > 0){
        localStorage.setItem('language',JSON.stringify(language));
    }
    

     const handleInputRename = (e) => {
        setExists({...exists, name: e.target.value})
    }

    const handleClickRename = () => {
        const newArray = [...language]
        const i = newArray.findIndex((lang) => lang.id === exists.id);
        newArray[i].name = exists.name
        setLanguage(newArray)
        setRename(null)
        setExists(null)
    }

  return (
    <>
    {rename && exists ? ( 
    <div className="input-group d-flex flex-row justify-content-center">
       <input className='inputfav' type="text" onInput={handleInputRename} value={exists.name}/>
       <button onClick={handleClickRename} className="btn btn-outline-secondary" type="button">Rename</button>
    </div>
    ) : ( 
    <div className="input-group d-flex flex-row justify-content-center">
       <input className='inputfav' type="text" placeholder="Name of the Game" onInput={handleInput} value={lang.name}/>
       <button onClick={handleAdd} className="btn btn-outline-secondary" type="button">Add</button>
    </div>
    )}
    </>
  );
};