import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const createOrder = async (order) => {

    const data = await setDoc(doc(db, "Pedidos"), {
        name,
        mail,
        direccion
    }, {
        cantidad,
        id,
        nombre,
        precio,
    })
    return data
}


