import 'style-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {


            primary: string;
            secondary: string;
            span: string;
            spanText: string;

            background: string;
            text: string;
            backgroundMenu: string;
            backCreatRoom: string;

            //questions
            backDesmarcado: string;
            backHighlighted: string;
            likeOff: string;
            textQuestion:string;

            backBody: string;
            textBody: string;

            logoImg:string;

        }
    }
}
