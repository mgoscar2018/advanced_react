import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyle } from './GlobalStyles';
// import { Category } from './components/Category';

export const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategories />
  </>
);
