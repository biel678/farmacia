import Home from './pages/Home';
import Header from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategorias from './components/Categorias/ListarCategorias';
import FormularioCategoria from './components/Categorias/FormCategoria';
import DeletarCategoria from './components/Categorias/DeletarCategoria';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return ( 
    <>
    <ToastContainer />
      <BrowserRouter>
        <Header />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </>
  );
}

export default App;