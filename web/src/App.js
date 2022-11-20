
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

import MainHeader from './components/MainHeader';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<MainHeader/>}>
  <Route index element={<Home/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="*" element={<Error/>}/>
  <Route path='/Footer' element={<Footer/>}/>
  </Route>
  </Routes>
  </BrowserRouter>


  </>
  );
}

export default App;
