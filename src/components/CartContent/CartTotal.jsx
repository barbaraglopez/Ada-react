import {useContext} from 'react'
import { AppContext } from '../../context/useContext'

export const CartTotal =() => {
    const { cart } = useContext(AppContext)
    const total = cart.reduce((acc, el) => acc + el.precio, 0)

    return (
        <div>Total $ {total}</div>
    )
}

