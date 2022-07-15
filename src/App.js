import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyle } from './styles/GlobalStyles';
// import { PhotoCard } from './components/PhotoCard';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
);
