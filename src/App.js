import './App.css';
import Home from "./routes/Home"
import Category from "./routes/Category"
import CartWidget from "./components/CartWidget"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import {useState} from "react";
import {Carro} from "./context/carro/index";
import {Detalle} from "./context/detalle/index";
import CheckOut from './routes/Checkout';
import Error404 from "./routes/Error404";
import ItemDetail from "./routes/ItemDetail";
import {Store} from "./context/store/index";

function App() {

  const [abierto, setAbierto] = useState(false);

  const [obj,setObj] = useState();

  const [data, setData]= useState({
    cantidad:0,
    items:[],
    precioTotal:0
  });

    console.log(data);

  return (
    <>
    <Detalle.Provider value={[data,setData]}>
    <Store.Provider value={[data,setData]}>
    <Carro.Provider value={[abierto, setAbierto]}>
    <BrowserRouter>
    <NavigationBar />
    <CartWidget />
    
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/item/:id?">
       <ItemDetail />
      </Route>
      <Route exact path="/category/:name?">
       <Category />
      </Route>
      <Route exact path="/checkout">
       <CheckOut />
      </Route>
      <Route path="*">
       <Error404 />
      </Route>
    </Switch>
    </BrowserRouter>
    </Carro.Provider>
    </Store.Provider>
    </Detalle.Provider>
   </>
  );
}

export default App;
