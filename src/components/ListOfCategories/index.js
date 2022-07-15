import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';
// import data from '../../../api/db.json'; // NOTA: no lleva corchetes "data"

export const ListOfCategories = () => {
  // const [categories, setCategories] = useState(data);
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(function () {
    fetch('https://petgram-server-mgoscar2018.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response); // actualizar nuestro state
      })
  },[]) // El segundo parámetro acepta un arreglo con todas las dependencias que necesita para ejecutarse
        // Al colocar '[]' indicamos que sólo debe ejecutarse cuando se monte el componente

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);    
  },[showFixed]);

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        // [1, 2, 3, 4].map(category => <Item key={category}><Category /></Item>) // MAPENADO UN ARREGLO
        // data.categories.map(category => <Item key={category.id}><Category cover={category.cover} path={category.path} emoji={category.emoji} /></Item>)
        //data.categories.map(category => <Item key={category.id}><Category {...category} /></Item>) // ... permite enviar todas las propiedades como props del objeto
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>) // ... permite enviar todas las propiedades como props del objeto
      }
    </List>
  ) // <= IMPORTANTE - Son paréntesis no llaves, revisar diferencia entre este tipo de función flecha

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>    
  );
};


