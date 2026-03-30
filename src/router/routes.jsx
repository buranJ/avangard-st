import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import Construction from "../pages/Construction";
import Media from "../pages/Media/Media";
import News from "../pages/News/News";
import ObjectDetail from "../pages/ObjectDetail/ObjectDetail";
import Realized from "../pages/Realized/Realized";
import RealizedCard from "../pages/RealizedCard";
import Technical from "../pages/Techical/Technical";
import Home from "../pages/Home/Home";
import Footer from "../componets/Footer";
import Header from "../componets/Header";
import AllObjects from "../pages/AllObjects/AllObjects";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/all-objects" element={<AllObjects />} />
        <Route path="/media" element={<Media />} />
        <Route path="/news" element={<News />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/realized" element={<Realized />} />
        <Route path="/realized/:slug" element={<RealizedCard />} />
        <Route path="/objects/:slug" element={<ObjectDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
