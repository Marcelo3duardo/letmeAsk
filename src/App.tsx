
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { AdminRoom } from './pages/Adminroom';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import { AuthContextProvider } from './context/AuthContext';
import { ThemeContextProvider } from './context/ThemeContext'
import { Room } from './pages/Room';
import {ThemesContext} from './context/ThemeContext';
import { useContext } from 'react';
import dark from './styles/themes/dark';


function App() {
const {theme} = useContext(ThemesContext);

  return (

    /*houve uma mudança de documentação das versões do react-router-dom na V6 */
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms/new" element={<NewRoom />} />
              <Route path="/rooms/:id" element={<Room />} />
              <Route path="/admin/rooms/:id" element={<AdminRoom />} />
            </Routes>
          </AuthContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
