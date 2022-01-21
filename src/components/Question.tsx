import { FormEvent, ReactNode, useState } from 'react';
import '../styles/questions.scss';
type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: any
    isAnswered?: boolean;
    isHighLighted?: boolean;
}

export function Question({
    content, author, children, isAnswered = false, isHighLighted =false
}: QuestionProps) {
    return (
        <div className={`question ${isAnswered ? 'answered':''} ${isHighLighted && !isAnswered ? 'highlighted':''}`}>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div className="D-like">
                    {children}
                </div>
            </footer>           

        </div>
    );
}