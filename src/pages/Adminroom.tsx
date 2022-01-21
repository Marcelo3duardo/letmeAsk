import { FormEvent, useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import deleteImg from '../assets/images/delete.svg';
import logoImg from '../assets/images/logo.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useauth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import { PageRoom } from '../styles/roomScss';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';






type RoomParams = {
    id: string;
}

export function AdminRoom() {

    const { user } = useAuth();
    const roomId = useParams<RoomParams>().id as string;
    const [newQuestion, setNewQuestion] = useState('');
    const { title, questions } = useRoom(roomId);
    const navigate = useNavigate();
    const {colors} = useContext(ThemeContext)



    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        });

        navigate('/');
    }

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }

    }

    async function handleCheckQuestion(questionId: string) {

        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true,
        });


    }

    async function handleHighLightQuestion(questionId: string) {

        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighLighted: true,
        });


    }

    return (

        <div id="page-room">
            <PageRoom>
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
                        <div className="aux">
                            <h1>sala {title}</h1>
                            {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                        </div>
                        <Switch
                            onChange={() => { }}
                            checked={false}
                            checkedIcon={false}
                            height={10}
                            width={40}
                            handleDiameter={20}

                            offHandleColor={colors.backgroundMenu}
                            offColor={colors.secondary}
                            onColor={colors.primary}
                            onHandleColor={colors.backgroundMenu}
                        />

                    </div>

                    <div className="question-list">
                        {questions.map(question => {
                            return (
                                <Question
                                    key={question.id}//serve para identificar por questão de performance
                                    content={question.content}
                                    author={question.author}
                                    isAnswered={question.isAnswered}
                                    isHighLighted={question.isHighLighted}
                                >
                                    {!question.isAnswered && (
                                        /* esse fragmento so eh enxergado pelo java, e n pelo css*/
                                        <>

                                            <button
                                                id="imgCheck"
                                                type="button"
                                                onClick={() => handleCheckQuestion(question.id)}
                                            >
                                                <img src={checkImg} alt="marca a pergunta" />
                                            </button>
                                            <button
                                                id="imgHilghLight"
                                                type="button"
                                                onClick={() => handleHighLightQuestion(question.id)}
                                            >
                                                <img src={answerImg} alt="dar destaque a  pergunta" />
                                            </button>
                                        </>
                                    )}

                                    <button
                                        id="imgDel"
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





            </PageRoom>
        </div>
    );
}