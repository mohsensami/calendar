import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { usePostsQuery } from '../services/postsApi';
import Container from '../Container/Container';

const Home = () => {
    const { data: posts, isLoading } = usePostsQuery();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                    >
                        <a href="#!">
                            <img
                                className="rounded-t-lg"
                                src={`https://picsum.photos/id/${post.id + 40}/400/300`}
                                alt=""
                            />
                        </a>
                        <div className="p-6">
                            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                <Link to={`/${post.id}`}>{post.title}</Link>
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{post.body}</p>
                            <Link
                                to={`/${post.id}`}
                                type="button"
                                className="inline-block rounded bg-[#3b71ca] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                            >
                                Button
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Home;
