import React from 'react';

export const Item = ({ id, name, language, setLanguage, rename, setRename }) => {
   const deleteLang = () => {
    const newArray = language.filter((lang) => lang.id !== id);
    setLanguage(newArray);
  };

  return (
    <li className='list-group-item list-group-item-primary'>
      {name}
      <div className='divlist'>
        <button onClick={deleteLang} type='button' className='btn btn-outline-success'>
          Delete
        </button>
        <button onClick={() => setRename(id)} type='button' className='btn btn-outline-dark'>
          Rename
        </button>
      </div>
    </li>
  );
};

export default Item;