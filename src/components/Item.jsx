import React from 'react';

export const Item = ({ id, name, language, setLanguage, setRename }) => {
   const deleteLang = () => {
    const newArray = language.filter((lang) => lang.id !== id);
    setLanguage(newArray);
      if (newArray.length === 0) localStorage.removeItem('language');

  };

  return (
    <li className=' d-flex flex-row justify-content-between align-items-center listaLI'>
      <p className='picono'>🕹</p>
      {name}
      <div className=' d-flex flex-row justify-content-end divlist'>
        <button onClick={deleteLang} type='button' className='btn btn-success botonesLI'>
          Delete
        </button>
        <button onClick={() => setRename(id)} type='button' className='btn btn-dark botonesLI'>
          Rename
        </button>
      </div>
    </li>
  );
};

export default Item;