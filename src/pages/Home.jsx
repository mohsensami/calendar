import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { usePostsQuery } from "../services/postsApi";
import Container from "../Container/Container";

const Home = () => {
  const { data: posts, isLoading, error } = usePostsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <div className="grid grid-cols-4">
        {posts.map((post) => (
          <div key={post.id}>
            <h1>
              <Link to={`/${post.id}`}>{post.title}</Link>
            </h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Home;
