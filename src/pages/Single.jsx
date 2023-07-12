import { useParams, Link } from "react-router-dom";
import { usePostQuery } from "../services/postsApi";

const Single = () => {
  const { id } = useParams();
  const { data, isLoading, error } = usePostQuery(id);
  console.log(data);

  return <div>Single</div>;
};

export default Single;
