import { Route, Routes } from 'react-router-dom';
import About from '../pages/About/About';
import Contacts from '../pages/Contacts/Contacts';
import Construction from '../pages/Construction';
import Media from '../pages/Media/Media';
import News from '../pages/News/News';
import ObjectDetail from '../pages/ObjectDetail/ObjectDetail';
import Realized from '../pages/Realized/Realized';
import RealizedCard from '../pages/RealizedCard';
import Technical from '../pages/Techical/Technical';
import Home from '../pages/Home/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/construction' element={<Construction />} />
      <Route path='/media' element={<Media />} />
      <Route path='/news' element={<News />} />
      <Route path='/technical' element={<Technical />} />
      <Route path='/realized' element={<Realized />} />
      <Route path='/realized/:slug' element={<RealizedCard />} />
      <Route path='/objects/:slug' element={<ObjectDetail />} />
    </Routes>
  );
};

export default AppRoutes;