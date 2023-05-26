import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebase/config'


export const getAllProducts = async ()=>{
    const data = await getDocs(collection(db, "productos"));
    data.forEach((doc) => {
        console.log(doc.data());
    });

}