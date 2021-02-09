function FondoCategoria({name}){

    function Categorizar(name){
        switch (name) {
            case "palas":
                return(
                    <h1 className={`nombre-cat ${name}`}>{name} de pádel</h1>
                )
            
            case "ropa":
                return(
                     <h1 className={`nombre-cat ${name}`}>{name} de pádel</h1>
                )
            case "zapatillas":
                return(
                     <h1 className={`nombre-cat ${name}`}>{name} de pádel</h1>
                )
            case "bolsos":
                return(
                     <h1 className={`nombre-cat ${name}`}>{name} de pádel</h1>
                )
            case "accesorios":
                return(
                   <h1 className={`nombre-cat ${name}`}>{name} de pádel</h1>
                )
            case "contacto":
                return(
                     <h1 className={`nombre-cat ${name}`}>{name} de pádel</h1>
                )
            case "detalle":
                return(
                     <h1 className={`nombre-cat ${name}`}>{name} de pádel</h1>
                )
        
            default:
                break;
    }};

   

    return(
        <>
        {
             Categorizar(name)
        }
        </>
    )
}

export default FondoCategoria;