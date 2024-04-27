import React from "react";
import './AnnoucementDetails.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { useLocation } from "react-router-dom";
import { useState ,useEffect } from "react";

export default function Details() {
    const [announcementData,setAnnouncementData] = useState([]);
    const location = useLocation();
    const state = location.state;


    const handleDataChange = () => {
        console.log(state.eventData)
        setAnnouncementData(state.eventdata);
        console.log('data set')
      };
    
      useEffect(() => {
        console.log('inital work')
        handleDataChange();
      }, [state]);
    

      return (
        <div className="container" style={{ display: 'flex', height:'100vh'}}>
            <i className="fas fa-circle" style={{ marginRight: '10px', color: '#63E6BE', marginTop: '8px' }}></i>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ color: '#63E6BE' }}>{announcementData.name}</h2>
                <p style={{ alignSelf: 'flex-start' }}>{announcementData.dayOfWeek} - {announcementData.dayOfMonth}</p>
                <div style={{ display: 'flex'}}>
                    <i className="fa fa-bars" style={{ color: '#63E6BE', fontSize: '20px', marginTop: '5px' }}></i>
                    <p style={{ margin: '0', marginLeft: '5px' }}>{announcementData.description}</p>
                </div>
            </div>
        </div>
    );
}