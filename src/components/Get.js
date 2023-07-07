// used mockAPI.io

import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://6499357679fbe9bcf83ec4f6.mockapi.io/fadeData")
            .then((response) => {
                console.log(response);
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <p style={{ textAlign: "center" }}>
                <i>All Records</i>
            </p>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <b>Title:</b>
                        <i>{post.title}</i>
                        <br />
                        <b>Body:</b>
                        {post.body}
                        <br />
                        <br />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default DataFetching;
