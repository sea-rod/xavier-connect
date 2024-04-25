import LibraryPagehead from "../Components/pagehead/LibraryPagehead";
import Resstatuscard from "../Components/Reservationcard/Resstatuscard";

  function Reservations() {
    return (
    <>
      <LibraryPagehead name={"RESERVATIONS"}/>
      <div style={{display:"flex", flexFlow: "wrap", justifyContent:"space-around"}}>
        <Resstatuscard/>
        <Resstatuscard/>
        <Resstatuscard/>
        <Resstatuscard/>
        <Resstatuscard/>
        <Resstatuscard/>
    
        
      </div>
    </>
  )
}

export default Reservations;
