import Pagehead from "../Components/Pagehead";
import Inventorycard from "../Cards/Inventory/inventorycard";

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
            <Inventorycard/>   
        </div>
        </>
    );
}

export default Inventory;