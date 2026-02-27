import "./App.css";
import Contacts from "./componets/Contacts";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import News from "./pages/News/News";
import Objects from "./componets/Objects";
import { useGetHomeInfoQuery } from "./api/home/home.api";
import ObjectDetail from "./pages/ObjectDetail/ObjectDetail";
import Numbers from "./componets/Numbers";
import Burger from "./componets/Burger";
import Panorama from "./componets/Panorama";
import Numeration from "./componets/Numeration";
import Realized from "./pages/Realized/Realized";
import RealizedCard from "./pages/RealizedCard";



function App() {
  const { data, isLoading, error } = useGetHomeInfoQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  console.log(data);
  return (
    <>
      {/* <ObjectDetail /> */}
      {/* <Realized/> */}
      {/* <News/> */}
      <RealizedCard/>
      {/* <Numbers /> */}
    </>
  );
}

export default App;
