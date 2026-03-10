import "./App.css";
import { useParams } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import News from "./pages/News/News";
import Objects from "./componets/Objects";
// import { useGetHomeInfoQuery } from "./api/home/home.api";
import ObjectDetail from "./pages/ObjectDetail/ObjectDetail";
import Numbers from "./componets/Numbers";
import Burger from "./componets/Burger";
import Panorama from "./componets/Panorama";
import Numeration from "./componets/Numeration";
import Realized from "./pages/Realized/Realized";
import RealizedCard from "./pages/RealizedCard";
import Media from "./pages/Media/Media";
import Technical from "./pages/Techical/Technical";
import About from "./pages/About/About";
// import { useGetObjectQuery } from "./api/objects/objects.api";

function App() {
  return (
    <>
      <ObjectDetail />
      {/* <ObjectDetail /> */}
      {/* <Realized/> */}
      {/* <News/> */}
      {/* <RealizedCard/> */}
      {/* <Media/> */}
      <Contacts/>
      {/* <Technical/> */}
      {/* <Numbers /> */}
      {/* <About /> */}
    </>
  );
}

export default App;
