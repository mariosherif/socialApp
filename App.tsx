import React, {FC, useEffect} from 'react';
import Navigation from './src/navigation/index';
import 'react-native-gesture-handler';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App: FC = () => {
  useEffect(() => {
    Platform.OS === 'android' && SplashScreen.hide();
  }, []);
  if (__DEV__) {
    import('./config/ReactotronConfig').then(() =>
      console.log('Reactotron Configured'),
    );
  }

  return <Navigation />;
};

export default App;
