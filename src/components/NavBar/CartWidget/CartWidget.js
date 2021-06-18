import carrito from './images/carrito.png'
export const CartWidget = () => {
    return(
    <button className= 'btnCarrito'> 
        <img src={carrito}></img>
    </button>
    )
}