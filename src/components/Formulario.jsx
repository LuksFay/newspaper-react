import React from 'react'
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({appSetCategoria}) => {


    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business',  label: 'Negocios'},
        {value: 'entertainment',label:'Entretenimiento'},
        {value: 'health',label: 'Salud'},
        {value: 'science',label: 'Ciencia'},
        {value: 'sports',label: 'Deportes'},
        {value: 'technology',label: 'Tecnología'}
]
    const[categoria, SetCategoria] = useSelect('general', OPCIONES);

    const buscarNoticias = e=> {
        e.preventDefault();
        appSetCategoria(categoria)
    }

    return(
        <div className={`${styles.buscador} row`}>
            <div className="ol s12 m8 offset-m2">
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                    <SetCategoria/>
                    <div className="input-field col s12">
                        <input type="submit" className={`${styles.btn_block} btn-large amber darken-2`} value="Buscar"/>
                    </div>
                </form>
            </div>
        </div>
    );
}
Formulario.propTypes = {
    appSetCategoria: PropTypes.func.isRequired
  }
export default Formulario