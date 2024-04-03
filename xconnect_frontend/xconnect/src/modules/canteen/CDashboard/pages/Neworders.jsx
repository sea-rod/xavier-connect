// import { wrap } from "framer-motion";
import Pagehead from "../Components/Pagehead";
import Neworder from "../Cards/Neworders/neworders"
// import Neworder from "../components/cards/neworders";
// import '../index.css';


const names = [
    {
        name:"New orders"
    }
]

const Neworders = () => {
    return (
        <>
        <Pagehead names={names}/>
        <div className="scroll-container-insideadmin">

        <div id="neworder-cards-neworders" className="neworders" style={{display: "flex", flexWrap: "wrap",justifyContent:"space-around"}}>
            <div className="container-for-cards">
            <Neworder/>
            </div>
            <div className="container-for-cards">
            <Neworder/>
            </div>
            <div className="container-for-cards">
            <Neworder/>
            </div>
            <div className="container-for-cards">
            <Neworder/>
            </div> 
        </div>
        </div>
        </>
    );
}

export default Neworders;