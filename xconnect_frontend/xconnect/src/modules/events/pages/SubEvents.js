import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SubEventCard from "../components/SubEventCard";
import axiosInstance from "../../../services/axios";
import "./SubEvents.css";

// Have to get subevent-img class here in every img tag
export default function SubEvents() {
  const location = useLocation();

  const [subEventData, setSubEventData] = useState([]);

  console.log(location.state);
  useEffect(() => {
    console.log(location.state.url);
    let url = location.state.url;
    url = url.split("/");
    console.log(url);
    let urlPath = "";
    for (let i = 4; i < url.length - 1; i++) {
      urlPath += url[i] + "/";
    }
    console.log(urlPath);

    axiosInstance
      .get(urlPath)
      .then((res) => {
        console.log(res.data?.sub_event);
        setSubEventData(res.data?.sub_event);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {subEventData.map((item) => (
        <SubEventCard
          key={item.id}
          name={item.name}
          desc={item.desc}
          img={item.img}
          rules={item.rules_n_judging}
        />
      ))}
      <div class="container pb-5">
        <div class="row"></div>
        <div class="mt-5">
          <a href="http://127.0.0.1:8000/api/events/register/1/">
            <button class="Btn mb-3">
              <strong>REGISTER</strong>
            </button>
          </a>
          <a href="./techlipse_brochure.pdf" target="_blank">
            <button class="Btn">
              <strong>BROCHURE</strong>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
