import React from 'react';
import Router from 'next/router'; 
import Page from '../components/Page';
import Nprogress from 'nprogress';
import '../components/styles/nprogress.css';


Router.events.on('routeChangeStart', () => Nprogress.start()); 
Router.events.on('routeChangeComplete', () => Nprogress.done()); 
Router.events.on('routeChangeError', () => Nprogress.done()); 

function Myapp({ Component, pageProps }) {
    return (
        <Page>
           <Component {...pageProps} /> 
        </Page>
    )
}

export default Myapp
