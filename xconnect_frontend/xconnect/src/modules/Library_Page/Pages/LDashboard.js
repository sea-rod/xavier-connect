import LibraryPagehead from "../Components/pagehead/LibraryPagehead";
import LibraryLinechart from "../Charts/LibraryLinechart";
import LibraryPiechart from "../Charts/LibraryPiechart";
import Lscard from "../Components/pagehead/LibraryStats/lscard";
import Recentreservations from "../Components/RecentReservations/Recentreservations";
import './LDashboard.css';

function LDashboard() {
  return (
    <>
    <LibraryPagehead name={"Dashboard"}/>
    <div id="libo1" className="libdashboard" style={{display:"flex", flexDirection:"row", flexWrap:"nowrap", justifyContent:'space-around'}} >
      <div id="libo2" className="libdashboard" style={{display:"flex", flexDirection:"column"}}>
        <LibraryPiechart/>
        <LibraryLinechart/>
      </div>
      <div id="libo3" className="libdashboard" style={{display:"flex", flexDirection:"column"}}>
        <div id="libO4" className="libdashboard">
          <Lscard name={"Issued Books"} icon={"https://img.icons8.com/ios/50/add-book.png"} counting={"660 New Books Issued"}/>
          <Lscard name={"Available Books"} icon={"https://img.icons8.com/ios/50/books.png"} counting={"200 New Books Available"}/>
          <Lscard name={"Unavailable Books"} icon={"https://img.icons8.com/dotty/80/unavailable-cloud.png"} counting={"140 Books Unavailable"}/>  
        </div>
        <div id="libO5" className="libdashboard" style={{margin: '32px'}}>
          <div className="libO6">
          <Recentreservations/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LDashboard;
