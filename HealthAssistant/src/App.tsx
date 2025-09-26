import './global.css'
import { Outlet } from 'react-router-dom';
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";



export default function App() {
  
  return (
    <div className='page-bg'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

