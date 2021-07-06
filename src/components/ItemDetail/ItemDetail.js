export const ItemDetail = ({item})=>{

    return(
        <div className='ConstructorProductoDetail'>
            <img className='img img__box' src={item.pictureUrl}></img>
            <h2 className='title__box'>{item.title}</h2>
            <span className='detail__box'>{item.detalle}</span>
            <p className='p__box'>${item.price}</p>

        </div>
    )
}