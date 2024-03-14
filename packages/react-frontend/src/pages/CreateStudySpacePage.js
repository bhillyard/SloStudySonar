import React, { useState } from "react";
import "./CreateStudySpacePage.css"; // Import CSS file for styling
import Cookies from "js-cookie";

const CreateStudySpacePage = () => {
  const [onCampus, setOnCampus] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [hoursStart, setHoursStart] = useState("00");
  const [minutesStart, setMinutesStart] = useState("00");
  const [amPmStart, setAmPmStart] = useState("AM");
  const [hoursEnd, setHoursEnd] = useState("00");
  const [minutesEnd, setMinutesEnd] = useState("00");
  const [amPmEnd, setAmPmEnd] = useState("AM");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

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

    // const formData = {
    //   title: title,
    //   onCampus: onCampus,
    //   location: location,
    //   operatingHours: `${operatingHoursStart}-${operatingHoursEnd}`,
    //   description: description,
    // };

    const formData = new FormData();

    formData.append("title", title);
    formData.append("onCampus", onCampus);
    formData.append("location", location);
    formData.append(
      "operatingHours",
      `${operatingHoursStart}-${operatingHoursEnd}`,
    );
    formData.append("description", description);
    formData.append("photo", photo);

    console.log(photo);
    if (
      formData.title === "" ||
      formData.location === "" ||
      formData.operatingHours === "" ||
      formData.description === ""
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
  };

  function postStudySpace(spaceData) {
    console.log(Cookies.get("token"));
    // eslint-disable-next-line no-undef
    const promise = fetch(`${process.env.REACT_APP_BACKEND_URL}/spaces`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: spaceData,
    });
    return promise;
  }

  return (
    <div className="container d-flex align-items-center">
      <h1 className="my-3">Add a Study Space</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="me-2">On Campus:</label>
          <input
            type="checkbox"
            checked={onCampus}
            onChange={(e) => setOnCampus(e.target.checked)}
            className="form-check-input"
          />
        </div>
        <div className="form-group">
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-2 form-group">
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
        </div>
        <div className="time-picker mt-3">
          <label>Operating Hours:</label>
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
        <div className="description mt-2">
          <label>
            Description:<br></br>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        {/* File upload input */}
        <div className="photo-upload form-group">
          <label className="me-2 mb-1">Upload Photo:</label>
          <input
            className="form-control"
            type="file"
            accept="image/*" // Specify that only image files are allowed
            onChange={(e) => setPhoto(e.target.files[0])} // Store the uploaded file in state
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <button className="mt-3 btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateStudySpacePage;
