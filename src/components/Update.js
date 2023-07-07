import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
    const [id, setId] = useState();
    const [newPost, setNewPost] = useState({
        id: "",
        title: "",
        body: "",
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        // console.log("handleChange");

        if (event.target.name === "id") {
            setId(event.target.value);
        }

        setNewPost((prevPost) => ({
            ...prevPost,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted");

        axios
            .put(
                `https://6499357679fbe9bcf83ec4f6.mockapi.io/fadeData/${id}`,
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
                <i>Update</i>
            </p>
            <br />
            <form onSubmit={handleSubmit}>
                <p>
                    Id{" "}
                    <input
                        type="number"
                        name="id"
                        value={newPost.id}
                        placeholder="Enter Post Id"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    Title{" "}
                    <input
                        type="text"
                        name="title"
                        value={newPost.title}
                        placeholder="Enter Updated Title"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    Body{" "}
                    <input
                        type="text"
                        name="body"
                        value={newPost.body}
                        placeholder="Enter Updated Content"
                        onChange={handleChange}
                    ></input>
                </p>
                <button type="submit">Update Record</button>
            </form>
        </div>
    );
}

export default Update;
