import Pagehead from "../Components/Pagehead";
// import '../index.css';

const names = [
    {
        name:"Cancelled orders"
    }
]

const Cancelledorders = () => {
    return (
        <>
        <Pagehead names={names}/>
        <div className="scroll-container-insideadmin">
        </div>
        </>
    );
}

export default Cancelledorders;