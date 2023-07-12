import React, { useState } from "react";
import { useAddPostMutation } from "../services/postsApi";

const CreatePost = () => {
  const [formValues, setFormValues] = useState({ title: "", body: "" });
  const [addPost] = useAddPostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!title && !body) {
    // } else {
    await addPost(formValues);
    navigate("/");
    alert("Contact Added Successfully");
    // }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>
            <span>Title</span>
            <input
              name="title"
              onChange={handleChange}
              value={formValues.title}
              className="border border-gray-200"
              type="text"
            />
          </label>
          <label>
            <span>Body</span>
            <textarea
              name="body"
              onChange={handleChange}
              value={formValues.body}
              className="border border-gray-200"
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
