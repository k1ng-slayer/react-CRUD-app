import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Delete() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Deleted");
    axios
      .delete(`https://6499357679fbe9bcf83ec4f6.mockapi.io/fadeData/${id}`)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <p style={{ textAlign: "center" }}>
        <i>Delete</i>
      </p>
      <br />
      <input
        type="text"
        value={id}
        placeholder="Enter Post Id"
        onChange={(event) => {
          console.log("typing...");
          setId(event.target.value);
        }}
      />
      <button type="button" onClick={handleClick}>
        Delete Post
      </button>
    </>
  );
}

export default Delete;
