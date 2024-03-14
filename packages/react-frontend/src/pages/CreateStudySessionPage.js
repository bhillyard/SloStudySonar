import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CreateStudySpacePage.css"; // Import CSS file for styling
import Cookies from "js-cookie";

const CreateStudySessionPage = () => {
  const [title, setTitle] = useState("");
  const [hoursStart, setHoursStart] = useState("00");
  const [minutesStart, setMinutesStart] = useState("00");
  const [amPmStart, setAmPmStart] = useState("AM");
  const [hoursEnd, setHoursEnd] = useState("00");
  const [minutesEnd, setMinutesEnd] = useState("00");
  const [amPmEnd, setAmPmEnd] = useState("AM");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedHoursStart =
      amPmStart === "PM" ? parseInt(hoursStart) + 12 : hoursStart;
    const formattedHoursEnd =
      amPmEnd === "PM" ? parseInt(hoursEnd) + 12 : hoursEnd;
    // Add leading zeros if hours or minutes are less than 10
    const paddedHoursStart =
      formattedHoursStart.length < 2
        ? `0${formattedHoursStart}`
        : formattedHoursStart;
    const paddedMinutesStart =
      minutesStart.length < 2 ? `0${minutesStart}` : minutesStart;
    const paddedHoursEnd =
      formattedHoursEnd.length < 2
        ? `0${formattedHoursEnd}`
        : formattedHoursEnd;
    const paddedMinutesEnd =
      minutesEnd.length < 2 ? `0${minutesEnd}` : minutesEnd;

    const operatingHoursStart = `${paddedHoursStart}:${paddedMinutesStart}`;
    const operatingHoursEnd = `${paddedHoursEnd}:${paddedMinutesEnd}`;
    console.log("Operating Hours Start:", operatingHoursStart);
    console.log("Operating Hours End:", operatingHoursEnd);
    // post spacedata

    const formData = {
        space: id,
      sessionName: title,
      date: date,
      location: location,
      startTime: operatingHoursStart,
      endTime: operatingHoursEnd,
      description: description,
    };

    
    
    if (
        formData.space === "" ||
      formData.sessionName === "" ||
      formData.startTime === "" ||
      formData.endTime === "" ||
      formData.description === "" ||
      formData.date === ""
    ) {
      alert("Please fill out all the required fields");
      return;
    }
    postStudySpace(formData)
      .then((response) => {
        if (response.status === 201) {
          alert("Study Space added successfully");
        } else {
          alert(response.status);
        }
      })
      .catch((error) => {
        alert(error);
      });
    console.log(formData);

    
    navigate(`/viewStudySpace/${id}`);
  };

  function postStudySpace(sessionData) {
    console.log(Cookies.get("token"));
    // eslint-disable-next-line no-undef
    const promise = fetch(`${process.env.REACT_APP_BACKEND_URL}/sessions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sessionData),
    });
    return promise;
  }

  return (
    <div className="container d-flex align-items-center">
      <header>
        <h1 className="my-3">Add a Study Session</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Session Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Date:
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div className="time-picker form-group mt-3">
          <label className="me-2">Session Time:</label>
          <input
            type="number"
            min="0"
            max="12"
            value={hoursStart}
            onChange={(e) => setHoursStart(e.target.value)}
          />
          :
          <input
            type="number"
            min="0"
            max="59"
            value={minutesStart}
            onChange={(e) => setMinutesStart(e.target.value)}
          />
          <select
            value={amPmStart}
            onChange={(e) => setAmPmStart(e.target.value)}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          {" - "}
          <input
            type="number"
            min="0"
            max="12"
            value={hoursEnd}
            onChange={(e) => setHoursEnd(e.target.value)}
          />
          :
          <input
            type="number"
            min="0"
            max="59"
            value={minutesEnd}
            onChange={(e) => setMinutesEnd(e.target.value)}
          />
          <select value={amPmEnd} onChange={(e) => setAmPmEnd(e.target.value)}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <div className="description form-group mt-2">
          <label>
            Description:<br></br>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        
        <button className="mt-3 btn btn-success" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateStudySessionPage;
