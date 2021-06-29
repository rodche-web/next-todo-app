import '../styles/globals.css';
import Head from 'next/head';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Next Todo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
