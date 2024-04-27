import React from "react";
import "./Calendar.css"
import { useState, useEffect } from "react";
import axiosInstance from "../../services/axios";
import { useNavigate } from "react-router-dom";

export default function Calendar() {

    const [announcementData, setAnnouncementData] = useState([]);
    const navigate = useNavigate();

     const handelnavigation=(data) =>
     {
      
    navigate('/announcement',{state:{eventdata:data}});
     }


    const fetchData = () => {
        axiosInstance.get("calendar/event/").then((res) => {
          console.log(res.data);
          setAnnouncementData(res.data.map((item) => ({
            ...item,
            dayOfWeek: getDayOfWeek(item.date),
            dayOfMonth: item.date.split("-")[2] 
          })));
        }).catch((err)=>{
          if (err.response.status === 403) {
            navigate("/login");
            
          }
        })
      };
    
      useEffect(() => {
        fetchData();
      }, []);
      
      const getDayOfWeek = (dateString) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const date = new Date(dateString);
        return days[date.getDay()];
      };


    return (
        <>
        <div className="container">
            <div className='mt-3 d-flex justify-content-center align-items-center calendar-hero-font' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/Calendar/image33.png)`, height:'200px'}}>March 2021</div>
            
           
            {announcementData.map((data,index) => (
                <div key = {index}  onClick={()=>handelnavigation(data)}>
                    <div style={{display: "inline", color:'#55C1A3'}}>{data.dayOfWeek} <span style={{fontSize:'25px'}}><strong>{data.dayOfMonth}</strong></span></div>

                    <div className="mt-3 announcement-font" style={{backgroundColor: '#5CC1A3', height: 'auto', padding: "10px", borderRadius:"12px", display: "inline-block", width: "80%", marginLeft: "10px"}}>{data.name}</div>
                </div>
            ))}
                 
        </div>
        </>
    );
}
