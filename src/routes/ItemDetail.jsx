import FondoCategoria from "../components/FondoCategoria";
import {getFirestore} from "../firebase";
import {useState, useEffect, useContext} from "react";
import {useParams, useHistory} from "react-router-dom";
import Item from "../components/Item";
import {Detalle} from "../context/detalle";
import {Store } from "../context/store";


function ItemDetail(){

    const [obj,setObj] = useContext(Detalle);
    const [data,setData] = useContext(Store);
    let {id} = useParams();
    const [band ,setBand] = useState(false);

    const [item, setItem] = useState();
    const [qty, setQty] = useState(1);
    const db = getFirestore();
    let history = useHistory();
    let index = 0;

    const getProductsFromDB = () =>{
        db.collection("productos").doc(id).get()
        .then(doc => {
            if (doc.exists){
                console.log(doc.data())
                setItem({id:id, data:doc.data()});
                setBand(true);
            }
            
            })
        .catch(e => console.log(e));
    }
    
    useEffect(() => {
        getProductsFromDB();
    },[]);

    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }	

    const isInCart=() => {
    
        let copia=data.items;
        for(let i=0; i<data.items.length; i++){
            if(item.id===data.items[i].id){ 
            index = i;
            copia[i].cantidad=copia[i].cantidad+qty;
            setData({cantidad:data.cantidad + qty, 
                items:copia, 
                precioTotal: data.precioTotal + (item.data.precio * qty)})
                return true;
            
        }
    }return false;
}




    const agregarCarrito = () => {
    

            if(isInCart()){
               
            }else{
                setData({
                    ...data, 
                    cantidad: data.cantidad + qty,
                    items: [...data.items, {item: item.data, cantidad: qty, id:item.id}],
                    precioTotal: data.precioTotal + (item.data.precio * qty)
                })
            }
            
    
        
       
       

       

        // history.push('/checkout');
        alert(`Agregaste ${qty} productos al carrito`);	
    }


    
    return(
        <>
              { 
            band ? 
        <>
        
        {/* <h1 className={`nombre-cat detalle`}>{item.data.nombre}</h1> */}
        <div className="envolvedor">
            <div className="div">
                <img className="foto-grande img-fluid" src={item.data.url} alt=""/>
            </div>
            
            <div className="div2">
                <h1 className="nombre">{item.data.nombre}</h1>
                <h3>${item.data.precio}</h3>
                <p>{item.data.descripcion}</p>

                <div className="detalle-compra">
                    <button disabled={qty === 1 ? 'disabled' : null } 	
                                onClick={handleClickResta}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => setQty(qty + 1)}>+</button>
                </div>
        
                 <button id="addCart" onClick={agregarCarrito}>Agregar al carrito</button>
            </div>
            
        </div>
        
      
       
       
        </> :
        <div className="load">
            <img className="gif" src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif" alt=""/>
        </div>
          }
        
        </>
    )
}

export default ItemDetail;