import { StoreProvider } from "easy-peasy";
import store from "../store";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "../styles/globals.css";
import "animate.css";
import "../styles/animations.css";
import "../styles/menu.css";
import "../styles/tables.css";

const MyApp = ({ Component, pageProps }) => (
  <StoreProvider store={store}>
    <Component {...pageProps} />
  </StoreProvider>
);

export default MyApp;
