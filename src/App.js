import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
import MiCustomProvider from "./components/CartContext/CartContext";

const App = () => {
  return (
    <MiCustomProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </MiCustomProvider>
  );
};

export default App;
