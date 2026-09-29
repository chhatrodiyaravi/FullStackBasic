import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios
      .post("http://localhost:5000/create-post", formData)
      .then((res) => console.log(res), alert("post Created successfully"))
      .catch((err) => alert(`Somthing went to wrong${err}`));

    navigate("/posts");
  };

  return (
    <div className="create-post-container">
      <form onSubmit={handleSubmit} className="create-post-form">
        <h2>Create Post</h2>

        <input
          name="image"
          className="image-input"
          type="file"
          accept="image/*"
        />

        <input
          name="caption"
          className="caption-input"
          type="text"
          placeholder="Write a caption..."
        />

        <button className="create-post-button" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
