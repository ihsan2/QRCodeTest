import React, {useEffect} from 'react';
import Navigation from './Navigation';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {PERMISSIONS, request} from 'react-native-permissions';
import {Platform} from 'react-native';

const App = () => {
  useEffect(() => {
    Platform.OS === 'android' && _getPermissionCamera();
  }, []);

  const _getPermissionCamera = async () => {
    await request(PERMISSIONS.ANDROID.CAMERA);
  };

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
