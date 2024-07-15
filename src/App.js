// import logo from './logo.svg';
// import './App.css';
import Navbar from './component/Navbar';
import  Home from './component/Home';
import Search from './component/Search';
import Recipe from './component/Recipe';
import Full from './component/Full';
import Footer from './component/Footer';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    
    <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/search" element={<Search/>}/>
      <Route path="/recipe" element={<Recipe/>}/>
      <Route path="/full" element={<Full/>}/>
    </Routes>
    <Footer/>
    </div>
     
    </div>
  );
}

export default App;
