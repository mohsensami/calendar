import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/features/postSlice';
import { Container, TableContainer, Table, TableHead, TableCell, TableBody, TableRow, Paper } from '@mui/material';
// import LoadingCard from './LoadingCard';

const Home = () => {
    const dispatch = useDispatch();
    const { loading, posts } = useSelector((state) => ({ ...state.app }));
    console.log('post', posts);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <Container maxWidth="xl" sx={{ marginTop: 2 }}>
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
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.body.slice(0, 50)} ...</TableCell>
                                <TableCell>{row.userId}</TableCell>
                                <TableCell>--</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Home;
