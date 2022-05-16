import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
import MiCustomProvider from "./components/CartContext/CartContext";


const App = () => {
  return (
    <BrowserRouter>
      <MiCustomProvider>
          <Header />
          <Main />
          <Footer />
      </MiCustomProvider>
    </BrowserRouter>
  );
};

export default App;
