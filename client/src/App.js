import './App.css';
import "../src/assets/css/style.css";
import "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from  "./pages/home";
import Program from './pages/program';
import Products from './pages/products';
import About from './pages/about';
import Form from './pages/joinUs';
import NavBar from './components/nav';
import Footer from './components/footer';
import Admin from './pages/secretAdminPage'
import Bmi from './pages/bmi';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/program' element={<Program/>}/>
          <Route path='/product' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/join' element={<Form/>}/>
          <Route path='/secretAdminPage' element={<Admin/>}/>          
          <Route path='/bmi' element={<Bmi/>}/>          

         

        </Routes>
      </BrowserRouter>  
     


      <Footer/>
    </div>
  );
}

export default App;
