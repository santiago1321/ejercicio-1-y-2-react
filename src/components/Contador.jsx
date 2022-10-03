import { useState } from 'react';
const Contador =()=>{
    //zona donde escribo la logica
    //let prueba = 10;
    //crear un state 
    const [numero, setNumero]= useState(10); 

    const sumar =()=>{
        //console.log ('desde la funcion sumar')
        //prueba++ nunca identificar directamente el state
        //console.log(prueba)
        setNumero (numero + 1);
    }
    return (
        // aqui puedo escribir mas logica
        <div>
            {/* aqui va el maquetado con un poquito de logica */}
            <h2>Contador</h2>
            <h3>{numero}</h3> {/*reemplazo por state numero*/}
            <button onClick={sumar}>+1</button>
            {/* tarea para la casa hacer dos botones uno que reste y otro que resetee el state y hacer ejercicio 3 subirlo git hub para la clase que viene*/}
        </div>
    );
    }

export default Contador;