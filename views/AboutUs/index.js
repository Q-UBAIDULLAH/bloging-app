import { useNavigate } from "react-router-dom";

function Aboutus(){
    const navigate=useNavigate()
    return(<div>
        <h1>AboutUs</h1>
        <button onClick={()=>navigate(-1)}>Back</button>
    </div>)
}
export default Aboutus;