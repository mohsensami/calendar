import { useEffect, useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../firebase';
import { useAddBlogMutation, useFetchBlogQuery, useUpdateBlogMutation } from '../../redux/services/blogsApi';
import { useNavigate, useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const initialState = {
    title: '',
    description: '',
};

const AddEditBlog = () => {
    const [data, setData] = useState(initialState);
    const { title, description } = data;
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [addBlog] = useAddBlogMutation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: blog } = useFetchBlogQuery(id ? id : skipToken);
    const [updateBlog] = useUpdateBlogMutation();

    useEffect(() => {
        if (id && blog) {
            setData({ ...blog });
        }
    }, [id, blog]);

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setProgress(progress);
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                        alert('Image upload to firebase successfully');
                        setData((prev) => ({ ...prev, imgUrl: downloadUrl }));
                    });
                }
            );
        };

        file && uploadFile();
    }, [file]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title && description) {
            if (!id) {
                await addBlog(data);
                navigate('/');
                alert('Blog added Successfully');
            } else {
                await updateBlog({ id, data });
                navigate('/');
                alert('Blog updated Successfully');
            }
        } else {
            alert('All fields are mandatory to fill');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <span>Title</span>
                        <input onChange={handleChange} type="text" name="title" value={title} />
                    </label>
                    <label>
                        <span>Description</span>
                        <textarea
                            onChange={handleChange}
                            name="description"
                            value={description}
                            cols="30"
                            rows="10"
                        ></textarea>
                    </label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <input type="submit" value="Submit" disabled={progress !== null && progress < 100} />
                </div>
            </form>
        </div>
    );
};

export default AddEditBlog;
