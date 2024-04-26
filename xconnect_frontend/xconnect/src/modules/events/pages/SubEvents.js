import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SubEventCard from "../components/SubEventCard";
import axiosInstance from "../../../services/axios";
import { baseURL } from "../../../services/axios";
import "./SubEvents.css";

// Have to get subevent-img class here in every img tag
export default function   SubEvents() {
  const location = useLocation();

  const [subEventData, setSubEventData] = useState([]);
  const [id, setId] = useState();
  const [broch, setBroch] = useState();

  console.log(location.state);
  useEffect(() => {
    console.log(location.state.url);
    setBroch(location.state.broch)
    let url = location.state.url;
    url = url.split("/");
    console.log(url);
    let urlPath = "";
    for (let i = 4; i < url.length - 1; i++) {
      urlPath += url[i] + "/";
    }
    setId(url[url.length-2])
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
      <div class="container">
        <h1 id="events-header">SUB EVENTS</h1>
        <div class="row">
          {subEventData.map((item) => (
            <SubEventCard
              key={item.id}
              name={item.name}
              desc={item.desc}
              img={item.img}
              rules={item.rules_n_judging}
              cord={item.cordinator}
            />
          ))}
        </div>
        <div class="container pb-5">
          <div class="row"></div>
          <div class="mt-5">
            <a href={`${baseURL}events/register/${id}`}>
              <button class="Btn mb-3">
                <strong>REGISTER</strong>
              </button>
            </a>
            <a href={`${broch}/`} target="_blank">
              <button class="Btn">
                <strong>BROCHURE</strong>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
