import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React from "react";
import { Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AppNavigator from "./src/navigation/";
import rootReducer from "./src/store/reducers";

const store = createStore(rootReducer);

const client = new ApolloClient({
  uri: "https://ahoro-api.herokuapp.com/v1/graphql"
});


export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </ApolloProvider>
    </Provider>
  );
}
