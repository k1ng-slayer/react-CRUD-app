import axios from "axios";
import React, { useState } from "react";

function IndividualDataFetching() {
    const [post, setPost] = useState([null]);
    const [id, setId] = useState("");

    const handleClick = () => {
        axios
            .get(`https://6499357679fbe9bcf83ec4f6.mockapi.io/fadeData/${id}`)
            .then((response) => {
                console.log(response);
                setPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <p style={{ textAlign: "center" }}>
                <i>Fetch Individual Record</i>
            </p>
            <br />
            <input
                type="text"
                value={id}
                placeholder="Enter Post Id"
                onChange={(event) => setId(event.target.value)}
            />
            <button type="button" onClick={handleClick}>
                Fetch Post
            </button>
            <br />
            <br />
            <b>Title:</b> <i>{post.title}</i>
            <br />
            <br />
            <b>Body:</b> {post.body}
        </>
    );
}

export default IndividualDataFetching;
