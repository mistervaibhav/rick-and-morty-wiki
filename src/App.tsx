import { ApolloProvider } from "@apollo/client/react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import { apolloClient } from "./graphql";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
