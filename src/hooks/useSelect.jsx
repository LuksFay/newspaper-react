import React, {useState} from 'react'

const useSelect = (stateInicial, opciones) => {

    const [state, setState] = useState(stateInicial);

    const SelectNoticias= () => (
        <select className="browser-default" value={state} onChange={e=>setState(e.target.value)}>
             {opciones.map(opcion=>(
                 <option key={opcion.value} value={opcion.value}>{opcion.label}
                 </option>
             ))}
        </select>

       
    );
    return [state, SelectNoticias];
}

export default useSelect

//b1f445275e5043da984766ec7f8389dc