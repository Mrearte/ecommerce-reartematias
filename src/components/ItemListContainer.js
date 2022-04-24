import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting})=>{
const onAdd = () =>{}

    return (
            <>{greeting}
            <ItemCount stock = "5" initial = "1" onAdd = {onAdd}  />
            </>
            
    )
}

export default ItemListContainer




