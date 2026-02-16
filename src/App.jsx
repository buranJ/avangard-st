import "./App.css";
import Contacts from "./componets/Contacts";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import News from "./componets/News";
import Objects from "./componets/Objects";
import { useGetObjectsListQuery } from "./api/objects/objects.api";

function App() {
  const { data } = useGetObjectsListQuery();
  // console.log(data);
  return (
    <>
      <Header />
      <Hero />
      <Objects data={data} />
      <News />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
