import "./App.css";
import Contacts from "./componets/Contacts";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import News from "./componets/News";
import Objects from "./componets/Objects";
// import { useGetObjectsListQuery } from "./api/objects/objects.api";
import { useGetHomeInfoQuery } from "./api/home/home.api";

function App() {
  // const { data } = useGetObjectsListQuery();
  const { data } = useGetHomeInfoQuery();
  // console.log(hero);
  console.log(data);
  return (
    <>
      <Header />
      <Hero data={data} />
      {/* <Objects data={data} /> */}
      <News />
      <Contacts />
      <Footer />

    </>
  );
}

export default App;
