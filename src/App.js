import { useSelector } from "react-redux";
import "./App.scss";
import Cart from "./Components/Cart/Cart";
import CenterBody from "./Components/CenterBody/CenterBody";
import LeftNav from "./Components/LeftNav/LeftNav";
import SubcategoryNav from "./Components/SubcategoryNav/SubcategoryNav";
import TopNav from "./Components/TopNav/TopNav";

function App() {
  const height = useSelector((state) => state.heightData);

  return (
    <>
      <div className="App">
        <TopNav />
        <div className="mid">
          <LeftNav />
          <CenterBody />
          <Cart />
        </div>
        {height && <SubcategoryNav />}
      </div>
    </>
  );
}

export default App;
