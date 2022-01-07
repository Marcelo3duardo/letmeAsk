
import {useNavigate} from 'react-router-dom';

//import {auth, firebase} from '../services/firebase';
import illuminationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import {Button} from '../components/Button' ;
import '../styles/auth.scss';//so eh usada pela pagina home

import { useAuth } from '../hooks/useauth';


export function Home() {
    const navigate = useNavigate();
    const {user, signInWithGoogle} = useAuth();

   async function handleCreatRoom(){
        if(!user){
        await signInWithGoogle();//retirei o await
        }

        navigate('/rooms/new');
    }

    return (
        <div id="page-auth" >
            <aside>
                <img src={illuminationImg} alt="pergunta e respostas" />
                <strong>Cire salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiência em tempo real</p>

            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeAsk" />
                    <button type="button" onClick={handleCreatRoom} className="creat-room">
                        <img src={googleIconImg} alt="Logo do google" />
                        <p>Crie sua sala com o Google</p>
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form >
                        <input type="text" placeholder="Digite o código da sala" />
                        <Button type="submit">Entrar na sala</Button>
                    </form>

                </div>
            </main>
        </div>
    )
}