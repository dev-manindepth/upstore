import { Provider } from "react-redux";
import "../styles/globals.scss";
import { PersistGate } from "redux-persist/integration/react";
import store from "../store";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />;
      </PersistGate>
    </Provider>
  );
}
