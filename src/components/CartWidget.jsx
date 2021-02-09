import {useContext, useEffect, useState} from "react";
import {Carro} from "../context/carro";
import {Store} from '../context/store';
import {Link} from "react-router-dom";
import CartItem from "../components/CartItem";

function CartWidget (){

    const [abierto, setAbierto] = useContext(Carro);
    const [data, setData] = useContext(Store);
    const [prods, setProds] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if(data.items.length) {
            const productos = JSON.stringify(data.items);
            localStorage.setItem('productos', productos);
        }

        if(localStorage.getItem('productos')) {
            setProds(JSON.parse(localStorage.getItem('productos')));
        } else {
            setProds(data.items);   
        }

    }, [data.items])

    useEffect(() => {
        if(data.items.length){
            setTotal(data.precioTotal)
        }else{
            setTotal(0)
        }
    },[data]);

    function CambiarSetShow(){
        setAbierto(!abierto);
        };

    return(
       <div className={`cart-widget ${abierto ? "open" : "close"}`}>
        <div className="flex">
        <h1 className="carrito">CARRITO</h1>
        
        <img className="cross" onClick={CambiarSetShow} src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close" alt=""/>
        
        
        
        </div>
        
        {data.items.map(item => (
                        <CartItem url={item.item.url} cantidad={item.cantidad} nombre={item.item.nombre} precio={item.item.precio} id={item.item.id}/>
                    ))}
        <h2 className="total"><span id="spanTotal">Subtotal:</span> ${total}</h2>
      
        <Link to="/checkout"><button onClick={CambiarSetShow} id="fin">FINALIZAR COMPRA</button></Link>
       </div>
       
    )
}

export default CartWidget;