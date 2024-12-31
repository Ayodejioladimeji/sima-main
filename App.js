import React, {useEffect, useState} from 'react';
import {withIAPContext} from 'react-native-iap';
import RootNav from './src/navigation/';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
<<<<<<< HEAD
import {store, persistor} from './src/store';
=======
>>>>>>> f31f635 (Mobile new features)
import LoadingView from './src/components/LoadingView';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';
import {I18nextProvider} from 'react-i18next';
import i18n from './services/i18n';
<<<<<<< HEAD
=======
import {persistor, store} from './src/redux/store';
>>>>>>> f31f635 (Mobile new features)

const App = () => {
  const [error, setError] = useState();
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  const URL_SCHEME = 'simascanproject://payasyougo';

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
          <RootNav />
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
};

export default withIAPContext(App);
