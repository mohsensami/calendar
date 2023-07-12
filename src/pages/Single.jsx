import { useParams, Link } from "react-router-dom";
import { usePostQuery } from "../services/postsApi";

const Single = () => {
  const { id } = useParams();
  const { data, isLoading, error } = usePostQuery(id);
  console.log(data);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default Single;
