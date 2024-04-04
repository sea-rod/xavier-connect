import { useEffect, useState } from "react";
import axiosInstance from "../../../services/axios";
import EventCard from "../components/EventCard";
// import QuillEditor from "../components/quill";
import "./Events.css"

export default function Events() {
  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("events/event/")
      .then((res) => {
        console.log(res);
        setEventsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* <QuillEditor /> */}
      <main className="container">
        <h1 id="events-header">EVENTS</h1>
        <div className="row mb-2">
          {eventsData.map((item) => (
            <EventCard
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.url}
              desc={item.desc}
            />
          ))}
        </div>
      </main>
    </>
  );
}
