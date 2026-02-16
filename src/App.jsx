import "./App.css";
import Contacts from "./componets/Contacts";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import News from "./componets/News";
import Objects from "./componets/Objects";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Objects/>
      <News/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
