import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import update from '../reducers/update'
import switchDisplay from '../reducers/switchDisplay'

const store = configureStore({
 reducer: {update,switchDisplay}

});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>weatherApp</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
