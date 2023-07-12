import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { usePostsQuery } from "../services/postsApi";

const Home = () => {
  const { data: posts, isLoading, error } = usePostsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>
            <Link to={`/${post.id}`}>{post.title}</Link>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
