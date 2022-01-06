import { useContext } from 'react';
import {Link} from 'react-router-dom';
import illuminationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
//import googleIconImg from '../assets/images/google-icon.svg';
import {Button} from '../components/Button' ;
import '../styles/auth.scss';//so eh usada pela pagina home
import { AuthContext} from '../App';

export function NewRoom() {
    const {user} = useContext(AuthContext);
    return (
        <div id="page-auth" >
            <aside>
                <img src={illuminationImg} alt="pergunta e respostas" />
                <strong>Cire salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo real</p>

            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeAsk" />
                   <h1>{user?.name}</h1>
                   <h2>Crie uma nova sala</h2>
                  
                    <form >
                        <input type="text" placeholder="Nome da sala" />
                        <Button type="submit">Criar na sala</Button>
                    </form>
                    <p>
                        Entrar em uma sala existente <Link to="/">clique aqui</Link>
                        //aprender a usar esse link 
                    </p>

                </div>
            </main>
        </div>
    )
}