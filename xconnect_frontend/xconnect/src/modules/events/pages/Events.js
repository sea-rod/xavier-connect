import { useEffect, useState } from "react";
import axiosInstance from "../../../services/axios";
import EventCard from "../components/EventCard";
import QuillEditor from "../components/quill";

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
      <QuillEditor />
      <main class="container">
        <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body">
          <div class="col-lg-6 px-0">
            <h1 class="display-4 fst-italic">
              Explore, Engage, Experience <br /> Vibrant Campus Events
            </h1>
            <p class="lead my-3">
              Immerse yourself in a world of knowledge, creativity, and
              excitement. Join us in making every moment on campus memorable.
            </p>
          </div>
        </div>
        {eventsData.map((item) => (
          <EventCard
            key={item.id}
            id={item.id}
            name={item.name}
            url={item.url}
            desc={item.desc}
          />
        ))}
      </main>
    </>
  );
}
