import React, { useEffect, useState } from "react";
import "./Posts.css";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}posts`)
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="posts-container">
      <h1>Posts</h1>

      <div className="posts-grid">
        {posts.map((post) => (
          <div className="post-card" key={post._id}>
            <img src={post.image} alt="Post" className="post-image" />

            <p className="post-caption">{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
