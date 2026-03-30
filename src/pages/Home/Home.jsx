import Header from "../../componets/Header";
import Hero from "../../componets/Hero";
import Objects from "../../componets/Objects";
import Footer from "../../componets/Footer";
import { useGetHomeInfoQuery } from "../../api/home/home.api";
import News from "../../componets/News";
import Contacts from "../../componets/Contacts";

function Home() {
  const { data, isLoading, error } = useGetHomeInfoQuery();
  console.log(data);
  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки данных</div>;
  return (
    <>

      <Hero data={data} />
      <Objects />
      <News />
      <Contacts />
      <Footer />
    </>
  );
}

export default Home;
