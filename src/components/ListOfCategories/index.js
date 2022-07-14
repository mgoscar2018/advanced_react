import React from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';
import data from '../../../api/db.json'; // NOTA: no lleva corchetes "data"

export const ListOfCategories = () => {
  return (
    <List>
      {
        // [1, 2, 3, 4].map(category => <Item key={category}><Category /></Item>) // MAPENADO UN ARREGLO
        // data.categories.map(category => <Item key={category.id}><Category cover={category.cover} path={category.path} emoji={category.emoji} /></Item>)
        data.categories.map(category => <Item key={category.id}><Category {...category} /></Item>) // ... permite enviar todas las propiedades como props del objeto
      }
    </List>
  );
};
