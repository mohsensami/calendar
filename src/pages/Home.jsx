import { usePostsQuery } from "../services/postsApi";

const Home = () => {
  const { data, isLoading, error } = usePostsQuery();
  console.log(data);
  return <div>Home</div>;
};

export default Home;
