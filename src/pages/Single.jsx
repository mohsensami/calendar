import { useParams, Link } from 'react-router-dom';
import { usePostQuery, useDeletePostMutation } from '../services/postsApi';
import Spinner from '../components/Spinner';
import Container from '../Container/Container';

const Single = () => {
    const { id } = useParams();
    const { data: post, isLoading, error } = usePostQuery(id);
    const [deleteContact] = useDeletePostMutation();

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure that you wanted to delete that Post ?')) {
            await deleteContact(id);
            alert('Post Deleted Successfully');
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

            <div
                key={post.id}
                className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            >
                <a href="#!">
                    <img className="rounded-t-lg" src={`https://picsum.photos/id/${post.id + 40}/600/400`} alt="" />
                </a>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        <Link to={`/${post.id}`}>{post.title}</Link>
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{post.body}</p>
                    <div className="flex gap-2">
                        <button className="bg-red-500 text-white px-4 py-2" onClick={() => handleDelete(post.id)}>
                            delete
                        </button>
                        <Link to={`/edit/${post.id}`} className="bg-blue-500 text-white px-4 py-2">
                            Edit
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Single;
