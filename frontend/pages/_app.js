import PropTypes from 'prop-types';
import nProgress from 'nprogress';
import '../components/styles/nprogress.css';
import { Router } from 'next/dist/client/router';
import LayoutPage from '../components/layout';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any,
};
