
import nProgress from 'nprogress';
import '../components/styles/nprogress.css';
import { Router } from 'next/dist/client/router';
import { ApolloProvider } from '@apollo/client';
import withApollo from '../lib/withData';
import LayoutPage from '../components/layout';

// Router.events.on('routeChangeStart', () => nProgress.start());
// Router.events.on('routeChangeComplete', () => nProgress.done());
// Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <>
      <ApolloProvider client={apollo}>
        {/* <LayoutPage>
          <Component {...pageProps} />
        </LayoutPage> */}
      </ApolloProvider>
    </>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps)
    pageProps = await Component.getInitialProps(ctx);
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withApollo(MyApp);

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  apollo: PropTypes.any,
};
