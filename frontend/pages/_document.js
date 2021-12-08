import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {

    // Styled-components supports concurrent server side rendering,
    // with stylesheet rehydration.The basic idea is that everytime
    // you render your app on the server, you can create a 
    // ServerStyleSheet and add a provider to your React tree,
    // that accepts styles via a context API
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => (props) => sheet.collectStyles(<App {...props} />));

        const styledTags = sheet.getStyleElement();
        return { ...page, styledTags };
    }

    // Create to Global styles and customized HTML meta, head.
    render() {
        return (<Html lang="en-CA">
            <Head ></Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>);
    }
}
