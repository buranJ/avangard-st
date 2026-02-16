import "./App.css";
import Contacts from "./componets/Contacts";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import News from "./componets/News";
import Objects from "./componets/Objects";
import { useGetHomeInfoQuery } from "./api/home/home.api";



function App() {
  const { data, isLoading, error } = useGetHomeInfoQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  console.log(data);
  return (
    <>
      <Header />
      <Hero data={data} />
      <Objects />
      <News />
      <Contacts />
      <Footer />

    </>
  );
}

export default App;
