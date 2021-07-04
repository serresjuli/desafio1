import {useState} from 'react'

export const ItemCount = ({stock, initial, onAdd}) =>{
    
    const [contador, setContador] = useState(initial)
    const [sumaStock, setSumaStock] = useState(stock)

    const btnSuma = () => {
        if (sumaStock> 1 && contador<sumaStock){
            setContador ( contador + 1)
        }
    }

    const btnResta = () => {
        if (contador>1){
            setContador (contador - 1)
        }
        else if (contador<= 1 ){
            setContador (contador + 0)
        }
    }
    

    return(
        <section className='AgregarCarrito'>
            <div className='contadorStock'>
                <button className='btnContadorMenos' onClick={btnResta}><strong>-</strong></button> 
                <span className='numeroContador' >{contador}</span> 
                <button className='btnContadorMas' onClick={btnSuma}><strong>+</strong></button>
            </div>
            <br></br>
            <div className='btnAgregarCarrito'> 
                <button className='btnSumarCarrito' onClick={onAdd} disabled={sumaStock === 0 ? true : false}> Agregar al carrito </button>
            </div>
        </section>
    )
}