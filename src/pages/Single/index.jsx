import { useParams } from 'react-router-dom';
import { useFetchBlogQuery } from '../../redux/services/blogsApi';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';

const Single = () => {
    const { id } = useParams();
    const { data: blog, isLoading, isError } = useFetchBlogQuery(id ? id : skipToken);
    useEffect(() => {
        isError && alert('Somthing went wrong');
    }, [isError]);
    if (isLoading) {
        return <p>Loading</p>;
    }
    return (
        <div>
            <h1>{blog?.title}</h1>
        </div>
    );
};

export default Single;
