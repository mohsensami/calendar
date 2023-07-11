import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/features/postSlice";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

const Single = () => {
  const { id } = useParams();
  const [values, setValues] = useState({ titleText: "", bodyText: "" });
  const dispatch = useDispatch();
  const { loading, title, post, edit, body } = useSelector((state) => ({
    ...state.app,
  }));

  useEffect(() => {
    if (body) {
      setValues({ ...values, titleText: title, bodyText: body });
    }
  }, [body]);

  useEffect(() => {
    dispatch(getPost({ id }));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 2 }}>
      <div>
        <Typography variant="h3" component="h1">
          {post.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {post.body}
        </Typography>
      </div>
    </Container>
  );
};

export default Single;
