import "./App.scss";
import Favourites from "./components/Favourites/Favourites";
import Search from "./components/Search/Search";
import Trendings from "./components/Trendings/Trendings";
import { GifProvider } from "./gifProvider/GifProvider";

function App() {
  return (
    <GifProvider>
      <div className="App">
        <h1>GIPHARG</h1>
        <hr />
        <Search />
        <Trendings />
        <Favourites />
      </div>
    </GifProvider>
  );
}

export default App;
