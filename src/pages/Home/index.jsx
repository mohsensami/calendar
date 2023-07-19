import { Link } from "react-router-dom";
import {
  useDeleteBlogMutation,
  useFetchBlogsQuery,
} from "../../redux/services/blogsApi";

const Home = () => {
  const { data, isLoading, isError, error } = useFetchBlogsQuery();
  const [deletBlog] = useDeleteBlogMutation();
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      deletBlog(id);
      alert("delete done");
    }
  };
  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>
            <Link to={`/single/${item.id}`}>{item.title}</Link>
          </h1>
          <button onClick={() => handleDelete(item.id)}>Delete</button> |{" "}
          <Link to={`/update/${item.id}`}>Update </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
