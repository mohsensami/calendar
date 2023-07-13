import Header from '../components/Header';

const Container = ({ children }) => {
    return (
        <div className="">
            <Header />
            <div className="container mx-auto pb-16">{children}</div>
        </div>
    );
};

export default Container;
