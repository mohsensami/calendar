import Header from '../components/Header';

const Container = ({ children }) => {
    return (
        <div className="container mx-auto">
            <Header />
            {children}
        </div>
    );
};

export default Container;
