import React from 'react'

function Lscard({name, icon, counting}) {
  return (
    <div style={{ width: '77vh', height: 'auto', margin: '2rem', backgroundColor: '#3B3B3B',border: 'solid 2px #5B4DCA' , borderRadius: '10px', padding: '10px', textAlign:'center', display:'flex', flexDirection:'column' }}>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around", alignItems: 'center', marginLeft:"17%", marginRight:'10%' }}>
        <h3>{name}</h3>
        <div style={{width: '40px', 
            height: '40px', 
            backgroundColor: '#fff', 
            borderRadius: '60%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            }}>
        <img width="25" height="25" src={icon} alt="add-book"/>
        </div>
    </div>

      <div>
        <p>{counting}</p>
      </div>
    </div>
  )
}

export default Lscard;

{/* <a  href="https://icons8.com/icon/X9vRcKHCV0oy/add-book">Add Book</a> icon by <a href="https://icons8.com">Icons8</a> */}