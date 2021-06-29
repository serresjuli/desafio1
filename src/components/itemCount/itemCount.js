import {useState} from 'react'

export const ItemCount = ({stock, initial, onAdd}) =>{
    
    const [contador, setContador] = useState(initial)
    const [sumaStock, setSumaStock] = useState(stock)
    const [bloquearBtn, setBloquearBtn] = useState(false)

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
        <div className='contadorBuy'>
            <button onClick={btnResta}> - </button> 
            <span>{contador}</span> 
            <button onClick={btnSuma}> + </button>
            <button className='btnSumarCarrito' onClick={onAdd} disabled={bloquearBtn}> Agregar al carrito </button>
        </div>
    )
}