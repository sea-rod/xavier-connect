import Pagehead from "../Components/Pagehead";
import Barchart from "../Charts/Barchart";
import Linechart from "../Charts/Linechart";
import Neworders from "../Cards/Neworders/neworders";
import Cancelledorders from "../Cards/Cancellorders/cancelledorders";
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
        <div id="chart-containers" className="dashboard" style={{display: "flex" }}>
        <Barchart />
        <Linechart />
        </div>
        {/* <Pagehead name={names[1].name} /> */}
        <div id="order-cards-dashboard" className="dashboard" style={{margin:"2rem"}}>
        <div id="neworder-cards-dashboard" >
        <div className="container-for-cards">
            <Neworders />
        </div>
        <div className="container-for-cards">
            <Neworders/>
        </div>
        </div>
        <div id="cancell-cards-dashboard">
        <div className="container-for-cards">
            <Cancelledorders />
        </div>
        </div>
        </div>
        </div>
        </>
    );
}

export default Dashboard;