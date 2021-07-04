

export const Item = ({item}) =>{
    return(
        <div className='ConstructorProducto'>
            <img className='img img__box' src={item.pictureUrl}></img>
            <h2 className='title__box'>{item.title}</h2>
            <p className='p__box'>${item.price}</p>
        </div>
    )
}