import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'



export const getAllProducts = async () => {
    const data = await getDocs(collection(db, "Productos"));

    let products = [];

    data.forEach((doc) => {
        products.push({
            ...doc.data(),
            id: doc.id
        })
    });

    //console.log(products)
    return products
}

/* export const createProduct = async ({name, descripcion,precio , uid}) => {
    const docRef = await addDoc(collection(db, "Products"), {
        name: name,
        descripcion:descripcion,
        precio: precio,
        id:uid
    });
} */

export const getUserProducts = async (uid) =>{
    const q = query(collection(db, "Products"), where("uid", "==", uid));

const data = await getDocs(q);
let products = []; 

data.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    products.push({
        ...doc.data(),
        id: doc.id,
    });
});
} 