import { useParams, Link } from "react-router-dom";
import { usePostQuery, useDeletePostMutation } from "../services/postsApi";
import Spinner from "../components/Spinner";

const Single = () => {
  const { id } = useParams();
  const { data: post, isLoading, error } = usePostQuery(id);
  const [deleteContact] = useDeletePostMutation();
  console.log(post);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure that you wanted to delete that Post ?")) {
      await deleteContact(id);
      alert("Post Deleted Successfully");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div>
        <h1 className="">{post.title}</h1>
      </div>
      <div>
        <button onClick={() => handleDelete(post.id)}>delete</button>
        <Link to={`/edit/${post.id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default Single;
