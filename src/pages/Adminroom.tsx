import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
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




    async function handSendQuestion(event: FormEvent) {
        event.preventDefault();
        if (newQuestion.trim() === '') {
            return;
        }

        if (!user) {
            throw new Error('you must be logged in ');
        }

        const question = {
            content: newQuestion,
            author: {
                name: user?.name,
                avatar: user.avatar,
            },
            isHighLighted: false, //destaque que o Admin poe dar
            isAnswered: false //saber pergunta ja foi respondida
        };


        await database.ref(`rooms/${roomId}/questions`).push(question);


        setNewQuestion('');
    }

    return (

        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="LetmeAsk" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined >Encerrar Sala </Button>
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
                            />
                        );
                    })}
                </div>
            </main>
        </div>
    );
}