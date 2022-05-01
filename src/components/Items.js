// import Items from "./ItemCount"

const Items = ({id, title,price,pictureUrl})=>{
    const MostrarDescription  = () => {
        // console.log({description})
    }
    return (
            <>
                <div id="Items" key={id} onClick = {MostrarDescription}>
                    <img src= {pictureUrl} alt="" />
                    <h3>{title}</h3>
                    <br />
                    <p> Precio: {price} </p> 
                </div>
            </>
            
    )
}

export default Items




