import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Detail } from './pages/Detail';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { Favs } from './pages/Favs';
import { NavBar } from './components/NavBar';

export const App = () => {
  const isLogged = false;
  //const [isLogged, setIsLogged] = useState(true);

  return (
    <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />

          <Route path='/favs' element={isLogged ? <Favs /> : <NotRegisteredUser />} />
          <Route path='/user' element={isLogged ? <User /> : <NotRegisteredUser />} />
        </Routes>
        <NavBar />
    </BrowserRouter>
  );
}
