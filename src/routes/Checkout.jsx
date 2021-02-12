import {useState, useEffect, useContext} from "react";
import {getFirestore} from "../firebase";
import {Store } from "../context/store";
import firebase from "firebase/app";
import "../styles/Checkout.css";
import fondo from "../assets/fondo.jpg";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

function CheckOut(){

    const [data,setData] = useContext(Store);    
    const db = getFirestore();
    const [formData, setFormData] = useState({
        nombre:"",
        apellido:"",
        cp:"",
        tel:"",
        ciudad:"",
        domicilio:""
    })
    const [status, setStatus] = useState(false);
    const [id, setId]  = useState ("");

    const handelChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const compra = {
        user: formData,
        cantidad: data.cantidad,
        items: data.items,
        totalPrice: data.precioTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date())

    }

   

    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }else{
        db.collection("ventas").add(compra)
    .then(({id}) => {
        setStatus(true);
        setId(id);
    })
    .catch( (e) =>{
        console.log(e);
    })
    }

    setValidated(true);
    
  };



    return(
        <>
        <div className="check">
        {
           !status ?    
          
           <>
                    <div className="check-form">
                    <h1>Checkout</h1>
                    <h3>Detalles de facturación</h3>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            value={formData.nombre}  onChange={handelChange} name="nombre"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
            value={formData.apellido}  onChange={handelChange} name="apellido"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Telefono</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">351</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Numero de Telefono"
              aria-describedby="inputGroupPrepend"
              required
              value={formData.tel} onChange={handelChange} name="tel"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Domicilio</Form.Label>
          <Form.Control type="text" placeholder="Domicilio" required
          value={formData.domicilio} onChange={handelChange} name="domicilio"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Ciudad" required 
          value={formData.ciudad} onChange={handelChange} name="ciudad"/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control type="text" placeholder="CP" required 
          value={formData.cp} onChange={handelChange} name="cp"/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">REALIZAR EL PEDIDO</Button>
    </Form>
            </div>

           </>
           
           :
           <div>
                <div className="fin">
               <h2>Tu Compra ha finalizado!!</h2>
               <h2>Tu ID de compra es: "{id}"</h2>
               
           </div>
                <img className="finn" src="http://blackcrown.es/wp-content/uploads/2018/06/Black-Crown-Logo-Header.png" alt=""/>
           </div>
          
           
       }
        </div>
     
       </>
    )
}

export default CheckOut;