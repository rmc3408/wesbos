import React from 'react'
import Page from '../components/Page';

function Myapp({ Component, pageProps }) {
    return (
        <Page>
           <Component {...pageProps} /> 
        </Page>
    )
}

export default Myapp
