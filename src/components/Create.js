import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        // console.log("handleChange");

        setNewPost((prevPost) => ({
            ...prevPost,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted");

        axios
            .post(
                "https://6499357679fbe9bcf83ec4f6.mockapi.io/fadeData",
                newPost
            )
            .then((response) => {
                console.log("Post created:", newPost);
                navigate("/");
            })
            .catch((error) => {
                console.error("Error creating post:", error);
            });
    };

    return (
        <div style={{ textAlign: "center" }}>
            <p style={{ textAlign: "center" }}>
                <i>Create</i>
            </p>
            <form onSubmit={handleSubmit}>
                <p>
                    Title{" "}
                    <input
                        type="text"
                        name="title"
                        value={newPost.title}
                        placeholder="Enter Title"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    Body{" "}
                    <input
                        type="text"
                        name="body"
                        value={newPost.body}
                        placeholder="Enter Content"
                        onChange={handleChange}
                    ></input>
                </p>
                <button type="submit">Add Record</button>
            </form>
        </div>
    );
}

export default Create;
