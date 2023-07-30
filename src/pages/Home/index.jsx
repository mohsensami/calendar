import { Link } from 'react-router-dom';
import { useDeleteBlogMutation, useFetchBlogsQuery } from '../../redux/services/blogsApi';
import Spinner from '../../components/Spinner';

const Home = () => {
    const { data, isLoading, isError, error } = useFetchBlogsQuery();
    console.log(data);
    const [deletBlog] = useDeleteBlogMutation();
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure?')) {
            deletBlog(id);
            alert('delete done');
        }
    };
    if (isLoading) {
        return <Spinner />;
    }
    return (
        <div className="grid md:grid-cols-5 gap-4">
            {data.map((item) => (
                <div key={item.id}>
                    <div>
                        <img src={item.imgUrl} alt="" />
                    </div>
                    <h1>
                        <Link to={`/single/${item.id}`}>{item.title}</Link>
                    </h1>
                    <button onClick={() => handleDelete(item.id)}>Delete</button> |{' '}
                    <Link to={`/update/${item.id}`}>Update </Link>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Home;
