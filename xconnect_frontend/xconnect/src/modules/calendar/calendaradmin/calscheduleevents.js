import React, { useEffect, useState } from "react";
import "./calscheduleevents.css";
import axiosInstance from "../../../services/axios";
import { useNavigate } from "react-router-dom";

const ScheduleEventForm = () => {
  const [announcementData, setAnnouncementData] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    axiosInstance.get("calendar/event/")
      .then((res) => {
        console.log(res.data);
        const updatedData = res.data.map((item) => ({
          ...item,
          dayOfWeek: getDayOfWeek(item.date),
          dayOfMonth: item.date.split("-")[2]
        }));
        setAnnouncementData(updatedData);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/login");
        }
      });
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
    <div className="calbody">
      <div className="calheading">
        <h2>ANNOUNCEMENT</h2>
      </div>

      <div className="calscheduleevents">
        {announcementData.map((event) => (
          <div className="SEB" key={event.id}>
            <p>{event.name}</p>
            <p>{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleEventForm;
