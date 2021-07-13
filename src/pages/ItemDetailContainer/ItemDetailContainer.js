import {ItemDetail} from '../../components/ItemDetail/ItemDetail'
import {useEffect, useState} from 'react'
import enterito from '../../Images/tejidos4.jpg'

export const ItemDetailContainer = () =>{

    const UnProducto = {
        id: 4,
        title: 'ENTERITO',
        price: 1350,
        pictureUrl: enterito,
        detalle: 'Enterito tiro regulable en lana',
        cantidad: 3,
        categoria: 'pantalones/ranitas'
    }

    const [item, setItem] = useState([])

    useEffect (()=>{
        const getItems = new Promise ((resolve, reject)=>{
            setTimeout (()=>{
                resolve(UnProducto)
            }, 2000)
        })
        getItems.then((UnProducto)=>{
            setItem(UnProducto)
        })
    },[])

    return(
        <section className='detailProducto'>
            {item.length === 0 ? <span> </span>: (<ItemDetail item={item}/>)}
        </section>
    )
}