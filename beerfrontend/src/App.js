
import './css/App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import AllBeers from './components/AllBeers';
import About from './components/About';

 import {
   BrowserRouter,
   Routes,
   Route
 } from "react-router-dom";

function App() {
  return (
    <div>
<BrowserRouter>
<Nav/>
<Routes>
  <Route path='/' element = {<Home/>}></Route>
  <Route path='/allBeers' element = {<AllBeers/>}></Route>
  <Route path='/about' element = {<About/>}></Route>
</Routes>
<Footer/>
</BrowserRouter>
</div>
  );
}


export default App;

