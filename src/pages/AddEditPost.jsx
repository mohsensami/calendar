import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  usePostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
} from "../services/postsApi";
import Container from "../Container/Container";

const AddEditPost = () => {
  const [formValues, setFormValues] = useState({ title: "", body: "" });
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();
  const { data: post, error } = usePostQuery(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValues.title == "" || formValues.body == "") {
      alert("Please provide value into each input field");
    } else {
      if (editMode) {
        await updatePost(formValues);
        navigate("/");
        alert("Contact Added Successfully");
      } else {
        await addPost(formValues);
        navigate("/");
        alert("Contact Added Successfully");
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  useEffect(() => {
    if (id) {
      setEditMode(true);
      if (post) {
        setFormValues({ ...post });
      }
    } else {
      setEditMode(false);
      // setFormValues({ ...formValues });
    }
  }, [id, post]);
  return (
    <Container>
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
          <input
            className="bg-green-500 text-white px-4 py-2 cursor-pointer"
            type="submit"
            value={editMode ? "Update" : "Add"}
          />
        </div>
      </form>
    </Container>
  );
};

export default AddEditPost;
