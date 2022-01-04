import illuminationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';//so eh usada pela pagina home

export function Home() {
    return (
        <div id="page-auth" >
            <aside>
                <img src={illuminationImg} alt="pergunta e respostas" />
                <strong>Cire salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo real</p>

            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="letmeAsk" />
                    <button type="button">
                        <img src={googleIconImg} alt="Logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div>
                        ou entre em uma sala
                    </div>
                    <form action="">
                        <input type="text" placeholder="Digite o código da sala"/>
                        <button type="submit">Entrar na sala</button>
                    </form>

                </div>
            </main>
        </div>
    )
}