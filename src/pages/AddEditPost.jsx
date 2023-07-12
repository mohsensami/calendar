import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  usePostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
} from "../services/postsApi";

const AddEditPost = () => {
  const [formValues, setFormValues] = useState({ title: "", body: "" });
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [editMode, setEditMode] = useState(false);

  const { id } = useParams();
  const { data, error } = usePostQuery(id);

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
      if (data) {
        setFormValues({ ...data });
      }
    } else {
      setEditMode(false);
      setFormValues({ ...initialState });
    }
  }, [id, data]);
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
          <input type="submit" value={editMode ? "Update" : "Add"} />
        </div>
      </form>
    </div>
  );
};

export default AddEditPost;
