import { ButtonHTMLAttributes } from 'react'

import { ButtonCss } from '../styles/button';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
    //let counter = 0;

    return (
        <div>
            <ButtonCss>

                <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
            </ButtonCss>
        </div>
    )
}
