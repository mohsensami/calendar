import { useFetchBlogsQuery } from '../../redux/services/blogsApi';

const Home = () => {
    const { data, isLoading, isError, error } = useFetchBlogsQuery();
    if (isLoading) {
        return <p>Loading</p>;
    }
    return (
        <div>
            {data.map((item) => (
                <div>{item.title}</div>
            ))}
        </div>
    );
};

export default Home;
