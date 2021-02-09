import "../styles/Item.css"
import { useHistory } from "react-router-dom";
import {Detalle} from "../context/detalle";
import {useContext} from "react";
import {Link} from "react-router-dom";

function Item({item}){


    const linkk="/item/"+item.id;
    let history = useHistory()
    const [obj,setObj] = useContext(Detalle);

    function action() {
        setObj(item);
        history.push(`/item/${item.id}`)
    }

    

    return(
        <div className="wrapper">
           <Link to={linkk}><img className="img-fluid" src={item.data.url} alt=""/></Link>
            <h1 onClick={action}>{item.data.nombre}</h1>
            <h4>${item.data.precio}</h4>
        </div>
    )
}

export default Item;