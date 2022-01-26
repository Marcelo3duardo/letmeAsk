import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import illuminationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
//import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
//import '../styles/auth.scss';//so eh usada pela pagina home
import { PageAuth } from '../styles/authCss';
import { useAuth } from '../hooks/useauth';
import { database } from '../services/firebase';
import firebase from 'firebase';



export function NewRoom() {
    const navigate = useNavigate();
    const [newRoom, setNewRoom] = useState('');
    const { user,Desligar } = useAuth();
    async function handleCreatRoom(event: FormEvent) {
        event.preventDefault();
        if (newRoom.trim() == '') {//esse trim serve para impedir que seja contado espaço vazios 
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            //passando os dados para o base de dados RealTimeDatabase
            title: newRoom,
            authorId: user?.id,
        })
        navigate(`/admin/rooms/${firebaseRoom.key}`);
        //sala criada a parti do id
    }

/*
    async function Desligar() {
        const desligar = await firebase.auth().signOut();
        //tem que recarregar a pagina
        navigate(`/`);
    }

*/


    return (
        <div id="page-auth" >
            <PageAuth>

                <aside>
                    <img src={illuminationImg} alt="pergunta e respostas" />
                    <strong>Cire salas de Q&amp;A ao-vivo</strong>
                    <p>Tire as duvidas da sua audiência em tempo real</p>

                </aside>
                <main>
                    <div className="main-content">
                        <img src={logoImg} alt="letmeAsk" />
                        <h1>{user?.name}</h1>

                        <Button
                            id="desconectar"
                            type="submit"
                            onClick={ Desligar}
                        > Desconectar </Button>

                        <h2>Crie uma nova sala</h2>

                        <form onSubmit={handleCreatRoom}>
                            <input
                                type="text"
                                placeholder="Nome da sala"
                                onChange={event => setNewRoom(event.target.value)}
                                value={newRoom}
                            />
                            <Button type="submit">Criar na sala</Button>
                        </form>
                        <p>
                            Entrar em uma sala existente <Link to="/">clique aqui</Link>
                        //aprender a usar esse link
                        </p>

                    </div>
                </main>
            </PageAuth>
        </div>
    )
}