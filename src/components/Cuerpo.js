function Cuerpo (nombre1){

    var listanombres = [];

    for(let nombre of nombre1.nombres){
        listanombres.push(<li>{nombre}</li>);
    }
    return(
        <div>
            <ol>
                {listanombres}
            </ol>

            <button onClick={()=>{
                nombre1.add('David');
            }}>Añadir un nombre</button>


            <button onClick={()=>{
                nombre1.change('David');
            }}>Cambiar_titulo</button>
        </div>
    )
}

export default Cuerpo;