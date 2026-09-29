import React, { useEffect, useState } from "react";
import "./Posts.css";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  //   const posts = [
  //     {
  //       id: 1,
  //       image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  //       caption: "Beautiful nature 🌿",
  //     },
  //     {
  //       id: 2,
  //       image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
  //       caption: "Exploring the city 🏙️",
  //     },
  //     {
  //       id: 3,
  //       image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  //       caption: "Perfect beach day 🌊",
  //     },
  //   ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
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
