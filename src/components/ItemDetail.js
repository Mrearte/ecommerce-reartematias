

const ItemDetail = ({items})=>{

console.log(items, "aca trae items")


    return (
            <div id = 'ItemDetail'> 
                <p>Descripcion del producto: {items.description} </p>     
            </div>
            
    )
}

export default ItemDetail




