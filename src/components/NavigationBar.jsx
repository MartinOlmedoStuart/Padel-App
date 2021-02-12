import "../styles/NavBar.css";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {Carro} from "../context/carro";
import {Store} from "../context/store";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// import Navbar from 'react-bootstrap/Navbar'

function NavigationBar(){

  const [abierto, setAbierto] = useContext(Carro);
  const [data, setData] = useContext(Store);

  function CambiarSetShow(){
    setAbierto(!abierto);
    };

    return(
<>

<Navbar id="navBar" expand="lg" variant="dark" >
  <Navbar.Brand href="#home">
      <Link to="/">
        <img
          alt=""
          src="http://cdn.shopify.com/s/files/1/0508/8785/2201/files/logo_blackcrown_1200x1200.png?v=1604442657"
          height="40"
          className="d-inline-block "
        />
      </Link>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
    <Nav >
      <Nav.Link ><Link to="/category/palas">Palas</Link></Nav.Link>
      <Nav.Link ><Link to="/category/ropa">ropa</Link></Nav.Link>
      <Nav.Link ><Link to="/category/zapatillas">zapatillas</Link></Nav.Link>
      <Nav.Link ><Link to="/category/bolsos">bolsos</Link></Nav.Link>
      <Nav.Link ><Link to="/category/accesorios">accesorios</Link></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  <div className={data.cantidad? "BootCart" : "hidden"}>
      <img onMouseEnter={CambiarSetShow} className="cart img-fluid" src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-12.jpg" alt=""/>
      <span id="contador-carro">{data.cantidad}</span>
   </div>
</Navbar>


        </>
    )
}

export default NavigationBar;