import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sunsuca from './components/Sunsuca';
import Servicios from './components/Servicios';
import SobreNosotros from './components/SobreNosotros';
import Galeria from './components/Galeria';
import SunsucaCliente from './components/SunsucaCliente';
import SunsucaAdmin from './components/SunsucaAdmin';

function App() {
  return (

    // El componente - BrowserRouter - sincroniza la URL del navegador con la interfaz gráfica, realizando una funcion de enrutamiento
    // permitiendo mostrar los componentes que se encuentran dentro.
    
    // - Routes - es el englobado para definir nuestras rutas. Es el encargado de renderizar nuestras rutas.
    // - Route - son las rutas como tal.
    <BrowserRouter>
      <Routes>
        {/* - index - es una propiedad booleana que permite indicar qué ruta es la que se va a mostrar primero */}
        {/* En - path - se coloca el nombre de la ruta y en - element -, un componente, renderiza al componente que queremos visualizar en la interfaz*/}
        <Route index path="/" element={<Sunsuca />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/sunsuca-cliente" element={<SunsucaCliente />} />
        <Route path="/sunsuca-admin" element={<SunsucaAdmin />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
