import "./App.scss";
import Favourites from "./components/Favourites/Favourites";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Trendings from "./components/Trendings/Trendings";
import { GifProvider } from "./gifProvider/GifProvider";

function App() {
  return (
    <GifProvider>
      <div className="App">
        <Search />
        <hr />
        <Trendings />
        <Favourites />
        <Footer />
      </div>
    </GifProvider>
  );
}

export default App;
