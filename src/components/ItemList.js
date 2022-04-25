import Items from "./Items"

const ItemList = ({items})=>{
    console.log(items, 'esto viene de items')
    return (
            <div id = 'ItemList'> 
            {
                items.map((item)=>{
                    return <Items id = {item.id} title = {item.title} price = {item.price} pictureUrl ={item.pictureUrl} key = {item.id}/>
                })
            }       
            </div>
            
    )
}

export default ItemList




