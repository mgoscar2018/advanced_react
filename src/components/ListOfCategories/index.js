import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { CategorySkeleton } from '../categorySkeleton';
import { List, Item } from './styles';
// import data from '../../../api/db.json'; // NOTA: no lleva corchetes "data"

// Custom Hook para hacer fetch de datos
function useCategoriesData () {
  // const [categories, setCategories] = useState(data);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false); // se le puede agregar más estados al custom hook
  
  useEffect(function () {
    setLoading(true); //cargando datos es "true"
    fetch('https://petgram-server-mgoscar2018.vercel.app/categories')
    .then(res => res.json())
    .then(response => {
      setCategories(response); // actualizar nuestro state
      setLoading(false); //cargando datos es "falso" ya que se terminó de cargar la información
    })
  },[]); // El segundo parámetro acepta un arreglo con todas las dependencias que necesita para ejecutarse
  // Al colocar '[]' indicamos que sólo debe ejecutarse cuando se monte el componente
  
  return { categories, loading }; // Los hook tienen que devolver "algo", para este caso, las categories y el estatus de cargando
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData(); // llama al custom hook
  const [showFixed, setShowFixed] = useState(false);
  
  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);    
  },[showFixed]);
  
  // if (loading) {
  //   return 'Cargando...';
  // }
  const renderList = (fixed) => (
    // <List className={fixed ? 'fixed' : ''}> // es mejor práctica utilizar props en lugar de classnames
    <List fixed={fixed}>
      {
        // [1, 2, 3, 4].map(category => <Item key={category}><Category /></Item>) // MAPENADO UN ARREGLO
        // data.categories.map(category => <Item key={category.id}><Category cover={category.cover} path={category.path} emoji={category.emoji} /></Item>)
        //data.categories.map(category => <Item key={category.id}><Category {...category} /></Item>) // ... permite enviar todas las propiedades como props del objeto
        loading 
        ? [1, 2, 3, 4, 5].map(itemSke => <Item key={itemSke}><CategorySkeleton /></Item>) // Si está cargando, muestra skeleton de componentes
        : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`}/></Item>) // ... permite enviar todas las propiedades como props del objeto
      }
    </List> 
  ); // <= IMPORTANTE - Son paréntesis no llaves, revisar diferencia entre este tipo de función flecha
  

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>    
  );
};


