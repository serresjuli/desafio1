import {ItemCount} from '../../components/itemCount/itemCount'
import {ItemList} from '../../components/itemList/ItemList'
import {useEffect, useState} from 'react'
import conjuntoImg from '../../Images/tejidos1.png'
import chaleco from '../../Images/tejidos2.jpg'
import ranita from '../../Images/tejidos3.jpg'
import {useParams} from 'react-router-dom'

export const ItemListContainer =() =>{
    //Catalogo de productos
    const Productos = [
        {
            id: 1,
            title: 'CONJUNTO',
            price: 1950,
            pictureUrl: conjuntoImg,
            detalle: 'Conjunto de saquito mas pantalon lana',
            cantidad: 5,
            categoria: 'conjuntos'
        },
        {
            id: 2,
            title: 'CHALECO',
            price: 890,
            pictureUrl: chaleco,
            detalle: 'Chaleco individual escote en V en lana',
            cantidad: 3,
            categoria: 'camperas'
        },
        {
            id: 3,
            title: 'RANITA',
            price: 1050,
            pictureUrl: ranita,
            detalle: 'Ranita con cordon regulable en lana',
            cantidad: 0,
            categoria: 'pantalones'
        }
    ]

    //Retraso 2 seg el catalogo
    const [Catalogo, setCatalogo] = useState([])
    useEffect(() =>{
        const verCatalogo = new Promise ((resolve, reject)=>{
            setTimeout (() =>{
                resolve(Productos)
            }, 2000)
        })
        verCatalogo.then((Productos) =>{
            setCatalogo(Productos) 
        })
    },[] // <-- para que se ejecute solo una vez
    )
    console.log(Catalogo)

    //desarrollo html
    //const stock = 15;
    //const initial = 1;
    //const onAdd = () =>{}
    const {id} = useParams()
    const [items, setItems] = useState([])

    useEffect(()=>{
        const getItems = () => {
            return id ? Productos.filter(()=> Productos.categoria === id) : Productos
        }
        const items = getItems()
        setItems(items)
    },[id])

    return(
        <section className='Productos'>
            <ItemList Items={items}/>
        </section>
       // <section>
        //    <ItemCount stock={15} initial={1} onAdd={onAdd}/>
       // </section>)
    )
    
}
