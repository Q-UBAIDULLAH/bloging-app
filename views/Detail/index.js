import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail(){
const {adid}=useParams();
useEffect(()=>{
    getproductsdetail()
},[])
const getproductsdetail=()=>{
    fetch(`https://dummyjson.com/products/${adid}`)
    .then((res)=>res.json())
    .then(console.log)
}

    return(
        <duv>
            <h1>Deatails</h1>
            <h2>Title</h2>
        </duv>
    )
}
export default Detail;