import {useParams} from "react-router-dom";
import {getFirestore} from "../firebase";
import {useState, useEffect, useContext} from "react";
import Item from "../components/Item";
import FondoCategoria from "../components/FondoCategoria";
import "../styles/Categoria.css";
import {Store} from "../context/store";



function Category(){

    let {name} = useParams();
    const [items, setItems] = useState([]);
    const [band ,setBand] = useState(false);
    const db = getFirestore();
  

    const [data, setData] = useContext(Store);

    // const getProductsFromDB = () =>{
    //     db.collection("productos").get()
    //     .then(docs => {
    //         let arr = [];
    //         docs.forEach(doc => {
    //            arr.push({id: doc.id, data: doc.data()})
    //         })
    //         setItems(arr);
    //     })
    //     .catch(e => console.log(e));
    // }

    

    const getProductsFromDB = () =>{
         setBand(false);
        db.collection("productos").where("categoria", "==", name).get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
               arr.push({id: doc.id, data: doc.data()})
            })
            setItems(arr);
            setBand(true);
        })
        .catch(e => console.log(e));
    }
    
    useEffect(() => {
        getProductsFromDB();
    },[name]);

  
    
    


    return(
        <>
      
        
        <div className="contenedorG">
        <FondoCategoria  name={name}/>
         <div className="contenedorC">
         { 
            band ? 
        <>
        
        {items.map(item =>(
                    <Item item={item}/>
                ))}
        
       
       
        </> :
        <div className="load">
            <img className="gif" src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif" alt=""/>
        </div>
          }
       
    
        </div>
        </div>
        
        </>
    )
}

export default Category;