import { useParams } from 'react-router-dom';
import { useFetchBlogQuery } from '../../redux/services/blogsApi';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';
import Spinner from '../../components/Spinner';

const Single = () => {
    const { id } = useParams();
    const { data: blog, isLoading, isError } = useFetchBlogQuery(id ? id : skipToken);
    useEffect(() => {
        isError && alert('Somthing went wrong');
    }, [isError]);
    if (isLoading) {
        return <Spinner />;
    }
    return (
        <section>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <img src={blog.imgUrl} alt={blog.title} />
                </div>
                <div>
                    <h1 className="text-xl font-bold mb-4">{blog.title}</h1>
                    <p>{blog.description}</p>
                </div>
            </div>
        </section>
    );
};

export default Single;
