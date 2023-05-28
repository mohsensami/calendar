import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, deletePost } from '../../redux/features/postSlice';
import { Link, useNavigate } from 'react-router-dom';
import {
    Container,
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Paper,
    Button,
    CircularProgress,
} from '@mui/material';
// import LoadingCard from './LoadingCard';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, posts } = useSelector((state) => ({ ...state.app }));

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    if (loading) {
        return (
            <div>
                <span>
                    <CircularProgress />
                </span>
            </div>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ marginTop: 2, marginBottom: 2 }}>
            <Button onClick={() => navigate('/panel/create-post')} variant="contained">
                Create
            </Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Body</TableCell>
                            <TableCell>User</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((row) => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>
                                    <Link to={`${row.id}`}>{row.title}</Link>
                                </TableCell>
                                <TableCell>{row.body} ...</TableCell>
                                <TableCell>{row.userId}</TableCell>
                                <TableCell>
                                    <Link
                                        to="#"
                                        onClick={() => dispatch(deletePost({ id: row.id }))}
                                        size="small"
                                        color="error"
                                    >
                                        Delete
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Home;
