import {ItemCount} from '../itemCount/itemCount'

export const ItemListContainer =({greeting}) =>{
    const stock = 15;
    const initial = 1;
    const onAdd = () =>{}

    return(
        <section>
            <p>{greeting}</p>
            <ItemCount stock={15} initial={1} onAdd={onAdd}/>
        </section>
    )
}
