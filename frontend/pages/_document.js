import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {

    // Create to Global styles and customized HTML meta, head.
    render() {
        return (<Html lang="en-CA">
            {/* <Head ></Head> */}
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>);
    }
}
