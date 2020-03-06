import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation/';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/store/reducers';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { default as appTheme } from './custom-theme.json';

const theme = { ...lightTheme, ...appTheme };

const store = createStore(rootReducer);

const client = new ApolloClient({
  uri: 'https://ahoro-api.herokuapp.com/v1/graphql',
});

export default function App(props) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ApplicationProvider mapping={mapping} theme={theme}>
            <Layout style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <AppNavigator />
            </Layout>
        </ApplicationProvider>
      </ApolloProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});