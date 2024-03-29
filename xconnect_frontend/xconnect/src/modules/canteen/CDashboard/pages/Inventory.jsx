import Pagehead from "../Components/Pagehead";
// import Inventorycard from "../components/cards/inventorycard";

const names = [
    {
        name:"Inventory"
    }
]

const Inventory = () => {
    return (
        <>
        <Pagehead names={names}/>
        <div className="inventory-items">
    
        </div>
        </>
    );
}

export default Inventory;