
import React, { Component } from 'react';
import AppRouter from './src/routes/index';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './src/core/redux/index';
const { persistor, store } = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <View style={{ flex: 1 }}>
            <AppRouter />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
