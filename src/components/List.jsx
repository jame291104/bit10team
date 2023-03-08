import React from 'react';
import '../App.css';
import { Item } from './Item';

export const List = ({ language, setLanguage, rename, setRename}) => {
  const elements = language.map((lang) => (
    <Item key={lang.id} id={lang.id} name={lang.name} language={language} setLanguage={setLanguage} rename={rename} setRename={setRename}/>
  ));

  return (
    <div>
      <ul className='list-group'>{elements}</ul>
    </div>
  );
};

export default List;