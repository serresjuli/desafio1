import {Item} from '../item/Item'
export const ItemList = ({Items}) =>{
    console.log(Items)
    return(
        <div>{Items.map(
            (itemIndiv)=> <Item item={itemIndiv} key={itemIndiv.id}/> )}  
        </div>

    )
}