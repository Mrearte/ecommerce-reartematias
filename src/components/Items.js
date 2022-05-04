import {Link, useNavigate }  from "react-router-dom"

const Items = ({item})=>{

    const navigate = useNavigate()
    
    const handleClick = () =>{
        navigate (`/item/${item.id}`)
    }

    return (
            <>
                <div id="Items" key={item.id} className = "Items">
                    <img src= {item.pictureUrl} alt="" />
                    <h3>{item.title}</h3>
                    <p> Precio: {item.price} </p> 
                    <button onClick = {handleClick}>
                    Ver detalle 
                    </button>
                    
                </div>
            </>
            
    )
}

export default Items




