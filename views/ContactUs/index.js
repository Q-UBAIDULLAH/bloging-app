import { useNavigate} from "react-router-dom";
function Contact(){
    const navigate=useNavigate()
    return(<div style={{backgroundColor:'yellow'}}>
        <h1>Contact page</h1>
        <button onClick={()=>navigate(-1)}>Back</button>
    </div>)
}
export default Contact;