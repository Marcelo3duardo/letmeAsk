import { FormEvent, useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import deleteImg from '../assets/images/delete.svg';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useauth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';


import '../styles/room.scss';





type RoomParams = {
    id: string;
}

export function AdminRoom() {

    const { user } = useAuth();
    const roomId = useParams<RoomParams>().id as string;
    const [newQuestion, setNewQuestion] = useState('');
    const { title, questions } = useRoom(roomId);
    const navigate = useNavigate();



    async function handleEndRoom(){
      await  database.ref(`rooms/${roomId}`).update({
          endedAt:new Date(),
      });

        navigate('/');
    }

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }

    }

    return (

        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="LetmeAsk" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined onClick={handleEndRoom} >Encerrar Sala </Button>
                    </div>

                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}

                </div>

                <div className="question-list">
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}//serve para identificar por questão de performance
                                content={question.content}
                                author={question.author}
                            >
                                <button
                                    type="button"
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="remove pergunta" />
                                </button>
                            </Question>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}