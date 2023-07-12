import { useParams, Link } from "react-router-dom";
import { usePostQuery, useDeletePostMutation } from "../services/postsApi";
import Spinner from "../components/Spinner";
import Container from "../Container/Container";

const Single = () => {
  const { id } = useParams();
  const { data: post, isLoading, error } = usePostQuery(id);
  const [deleteContact] = useDeletePostMutation();

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
    <Container>
      <Link to="/">
        <button className="bg-yellow-500 text-white px-4 py-2">Go Back</button>
      </Link>
      <div>
        <h1 className="">{post.title}</h1>
      </div>
      <div>{post.body}</div>
      <div className="flex gap-2">
        <button
          className="bg-red-500 text-white px-4 py-2"
          onClick={() => handleDelete(post.id)}
        >
          delete
        </button>
        <Link
          to={`/edit/${post.id}`}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Edit
        </Link>
      </div>
    </Container>
  );
};

export default Single;
