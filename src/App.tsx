
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import {AdminRoom} from './pages/Adminroom';

import { AuthContextProvider } from './context/AuthContext';
import { Room } from './pages/Room';


function App() {


  return (

    /*houve uma mudança de documentação das versões do react-router-dom na V6 */
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
          <Route path="/rooms/:id" element={<Room />} />
          <Route path="/admin/rooms/:id" element={<AdminRoom />} />

        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
