import "../styles/NavBar.css";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {Carro} from "../context/carro";
import {Store} from "../context/store";

function NavigationBar(){

  const [abierto, setAbierto] = useContext(Carro);
  const [data, setData] = useContext(Store);

  function CambiarSetShow(){
    setAbierto(!abierto);
    };

    return(
<>
        <div id="nav-bar">
          
            <Link to="/">
              {/* <img id="logo" src="https://www.voleapadelstore.es/wp-content/uploads/2012/07/Volea-logotipo-principal-negro_baja.jpg" alt=""/> */}
              <img id="logo" src="http://cdn.shopify.com/s/files/1/0508/8785/2201/files/logo_blackcrown_1200x1200.png?v=1604442657" alt=""/>
            </Link>
          
         
          <ul className="links">
            <li><Link to="/category/palas">Palas</Link></li>
            <li><Link to="/category/ropa">ropa</Link></li>
            <li><Link to="/category/zapatillas">zapatillas</Link></li>
            <li><Link to="/category/bolsos">bolsos</Link></li>
            <li><Link to="/category/accesorios">accesorios</Link></li>
            {/* <li><Link to="/category/contacto">contacto</Link></li> */}
          </ul>
        
            <div className={data.cantidad? "" : "hidden"}>
            
            <img onClick={CambiarSetShow} className="cart img-fluid" src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-12.jpg" alt=""/>
            <span id="contador-carro">{data.cantidad}</span>
            </div>
            
        </div>
        </>
    )
}

export default NavigationBar;