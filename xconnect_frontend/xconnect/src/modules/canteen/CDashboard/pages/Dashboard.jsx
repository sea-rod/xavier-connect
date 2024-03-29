import Pagehead from "../Components/Pagehead";
// import Barchart from "../components/Barchart";
// import Linechart from "../components/Linechart";
// import Neworders from "../components/cards/neworders";
// import Cancelledorders from "../components/cards/cancelledorders";
import './dashboard.css';
// import '../index.css';

const names = [
    {
        name:"Dashboard"
    }
]

const Dashboard = () => {
    return (
        <>
        <Pagehead names={names}/>
        <div className="scroll-container-insideadmin">
            {/* some code is there  */}
        </div>
        </>
    );
}

export default Dashboard;