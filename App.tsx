import React, {FC} from 'react';
import Navigation from './src/navigation/index';
import 'react-native-gesture-handler';

const App: FC = () => {
  if (__DEV__) {
    import('./config/ReactotronConfig').then(() =>
      console.log('Reactotron Configured'),
    );
  }

  return <Navigation />;
};

export default App;
