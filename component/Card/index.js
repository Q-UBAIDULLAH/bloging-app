import '../../App.css';
import { useNavigate } from "react-router-dom";
function Cards(props){
const navigate=useNavigate()
    return(
    <div className="cards" onClick={()=>navigate('detail')} style={{backgroundColor:"" }}>
        <div className="cards-1"  >
        <h2>{props.message.title}</h2>
        <h3>{props.message.description}</h3>
        <img width={326} height={230} src={props.message.thumbnail}></img>
        <h3> Rs: {props.message.price}</h3>
        </div>
  
        </div>
    
    )
}
export default Cards;