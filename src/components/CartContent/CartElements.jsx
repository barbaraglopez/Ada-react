import { useContext } from "react";
import { AppContext } from "../../context/useContext";


export const CartElements = () => {
    const { cart } = useContext(AppContext)
    return cart.map((product)=>{
        return (
            <div className="cartContent" key={product.id}>
                <h3 className="name">{product.name}</h3>
                <p className="descripcion">{product.descripcion}</p>
                <p className="precio">{product.precio}</p>
            </div>
        )
    })
}

