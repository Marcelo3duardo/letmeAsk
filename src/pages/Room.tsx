import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useauth';
import { database } from '../services/firebase';
import '../styles/room.scss';

type QuestionType = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}

type firebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}>

type RoomParams = {
    id: string;
}

export function Room() {

    const { user } = useAuth();
    const roomId = useParams<RoomParams>().id as string;
    const [newQuestion, setNewQuestion] = useState('');
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: firebaseQuestions = databaseRoom.questions ?? {};

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered
                }
            })

            setTitle(databaseRoom.title);
            setQuestions(parsedQuestions)
        })

    }, [roomId]);

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
                    <RoomCode code={roomId} />
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}

                </div>

                <form onSubmit={handSendQuestion}>
                    <textarea
                        placeholder="O que você quer perguntar ?"
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />


                    <div className="form-footer">
                        {user ? (
                            <div className="user-info">
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <span>Para enviar uma pergunta <button>faça seu login</button>.</span>
                        )
                        }
                        <span>Para enviar uma pergunta <button>faça seu login</button>.</span>
                        <Button type="submit" disabled={!user}>Enviar Pergunta</Button>
                    </div>

                </form>
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